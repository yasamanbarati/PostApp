import { Grid } from "@mui/material"
import { Imageprops } from "services/type/type"
import { PostCardFileIcon } from "./post_card_file_icon/post_card_file_icon"
import { PostCardFileInformation } from "./post_card_file_information/post_card_file_information"

export const PostCardFile = ({ imageSrc, imageBlob, type }: Imageprops) => {
    return (
        <Grid item sm={9} xs={8} display="flex" >
            <PostCardFileIcon />
            <PostCardFileInformation imageSrc={imageSrc} imageBlob={imageBlob} type={type} />
        </Grid>
    )
}
