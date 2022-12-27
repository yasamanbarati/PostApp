import { ChangeEvent } from "react"
import { Button, styled } from "@mui/material"
import { Add } from "@mui/icons-material"
import { CutsomTypography } from "../box_typography/box_typography"
import { dispatch } from "setup/redux/store"
import { setPostListAction } from "scenes/_slice/home.slice"

const ButtonBox = styled(Button)(({ theme }) => ({
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
    }
}))
export const BoxUploud = () => {

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            dispatch(setPostListAction(e.target.value))
            console.log(e.target.value);
        }
    }

    return (
        <ButtonBox variant="contained" disableElevation={true} aria-label="upload picture">
            <input accept="image/*" type="file" onChange={handleFileChange} />
            <CutsomTypography text="اضافه کنید" textColor="primary" textStyle={{ fontSize: "1rem", fontWeight: "600" }} />
            <Add color="primary" fontSize="medium" fontWeight="800" />
        </ButtonBox>
    )
}
