import { Grid } from "@mui/material"
import { Imageprops } from "services/type/type"
import { PostCardButton } from "./post_card_button/post_card_button"
import { PostCardFile } from "./post_card_file/post_card_file"
import { PostCardIndex } from "./post_card_index/post_card_index"

export const PostCard = ({ index, imageSrc, imageBlob, type }: Imageprops) => {
  return (
    <Grid width="100%" height="70px" container justifyContent="space-between" alignItems="center">
      <PostCardIndex index={index} />
      <Grid container item xs={11} justifyContent="space-between" alignItems="center">
        <PostCardFile imageSrc={imageSrc} imageBlob={imageBlob} type={type} />
        <PostCardButton imageSrc={imageSrc} />
      </Grid>
    </Grid >
  )
}
