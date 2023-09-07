import { useEffect, useState } from "react"
import { CircularProgress, Grid } from "@mui/material"
import { CustomButton } from "scenes/components/button/custom_button"
import { setLoadingAction, setRemovePostCardAction } from "scenes/_slice/home.slice"
import { ButtonProps, imageProps } from "services/type/type"
import { useAppSelector } from "setup/redux/react-hooks"
import { dispatch } from "setup/redux/store"
const buttonStyle = {
    width: "100%",
    height: "100%",
    border: "2.5px solid #d32f2f",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "0.9rem",
}
const progressStyle = {

}
export const PostCardButton = ({ imageSrc }: imageProps, { onClickEvent }: ButtonProps) => {
    const [progress, setProgress] = useState(10);

    const loading = useAppSelector(state => state.home.loading)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 1000);
        return () => {
            setTimeout(() => {
                clearInterval(timer)
                dispatch(setLoadingAction(false))
            }, 5000);
        };
    }, [progress]);


    return (
        <Grid item xs={2} display="flex" justifyContent="end">
            {loading ?
                (
                    <CircularProgress size={30} sx={progressStyle} value={progress} />
                ) : (
                    <CustomButton
                        Text="حذف"
                        color="error"
                        sxStyle={buttonStyle}
                        onClickEvent={() => dispatch(setRemovePostCardAction(imageSrc))} />
                )
            }
        </Grid>
    )
}
