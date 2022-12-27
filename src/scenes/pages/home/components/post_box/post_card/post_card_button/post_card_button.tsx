import { Grid } from "@mui/material"
import { CustomButton } from "scenes/components/button/custom_button"
import { setRemovePostCardAction } from "scenes/_slice/home.slice"
import { Imageprops } from "services/type/type"
import { dispatch } from "setup/redux/store"
const ButtonStyle = {
    width: "80%",
    height: "80%",
    border: "2.5px solid #d32f2f",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "0.9rem",
}
export const PostCardButton = ({ imageSrc }: Imageprops) => {
    return (
        <Grid item xs={3} display="flex" justifyContent="end">
            <CustomButton Text="حذف" color="error" sxStyle={ButtonStyle} onClickEvent={() => dispatch(setRemovePostCardAction(imageSrc))} />
        </Grid>
    )
}
