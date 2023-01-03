import { ChangeEvent } from "react"
import { Button, styled } from "@mui/material"
import { Add } from "@mui/icons-material"
import { CutsomTypography } from "../box_typography/box_typography"
import { dispatch } from "setup/redux/store"
import { setPostListAction } from "scenes/_slice/home.slice"
import { MediaBodyType } from "scenes/_slice/type"

const ButtonBox = styled(Button)(({ theme }) => ({
    cursor: "pointer",
    position: "relative",
    height: "150px",
    backgroundColor: theme.palette.primary.contrastText,
    border: "2px dashed",
    borderColor: theme.palette.primary.main,
    borderRadius: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
        backgroundColor: theme.palette.primary.contrastText,
    },
    "& input": {
        width: "100%",
        height: "100%",
        opacity: "0",
        position: "absolute",
        cursor: "pointer",
    }
}))
export const BoxUploud = () => {

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files) return

        const blob = URL.createObjectURL(e.target.files[0])
        const ImageName = e.target.files[0].name
        const fileObj: MediaBodyType = {
            type: "IMAGE",
            imageBlob: blob,
            name: ImageName,
        }
        console.log(blob);
        console.log(ImageName);

        dispatch(setPostListAction(fileObj))
    }

    return (
        <ButtonBox variant="contained" disableElevation={true} aria-label="upload picture">
            <input accept="image/*" type="file" onChange={handleFileChange} />
            <Add color="primary" fontSize="medium" fontWeight="800" />
            <CutsomTypography text="اضافه کنید" textColor="primary" textStyle={{ fontSize: "1rem", fontWeight: "600", margin: "8px" }} />
        </ButtonBox>
    )
}
