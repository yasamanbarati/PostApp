import { Grid } from "@mui/material"
import { PostCardButton } from "./post_card_button/post_card_button"
import { PostCardFile } from "./post_card_file/post_card_file"
import { PostCardIndex } from "./post_card_index/post_card_index"

export const PostCard = () => {
  return (
    <Grid width="100%" height="70px" container justifyContent="space-between" alignItems="center">
      <PostCardIndex index="1" />
      <Grid container item xs={11} justifyContent="space-between" alignItems="center">
        <PostCardFile imageSrc="https://picsum.photos/200/300" />
        <PostCardButton />
      </Grid>
    </Grid >
  )
}
