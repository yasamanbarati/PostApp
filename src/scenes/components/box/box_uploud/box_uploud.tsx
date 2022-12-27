import { Add } from "@mui/icons-material"
import { Button, styled } from "@mui/material"
import { CutsomTypography } from "../box_typography/box_typography"

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
    return (
        <ButtonBox variant="contained" disableElevation={true} aria-label="upload picture">
            <input accept="image/*" type="file" />
            <CutsomTypography text="اضافه کنید" textColor="primary" />
            <Add color="primary" fontSize="medium" fontWeight="800" />
        </ButtonBox>
    )
}
