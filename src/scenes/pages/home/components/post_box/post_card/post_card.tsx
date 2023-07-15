import { Grid, styled } from '@mui/material'
import { imageProps } from 'services/type/type'
import { PostCardButton } from './post_card_button/post_card_button'
import { PostCardFile } from './post_card_file/post_card_file'
import { PostCardIndex } from './post_card_index/post_card_index'

const GridPostCard = styled(Grid)({
  width: "100%",
  height: "70px",
  justifyContent: "space-between",
  alignItems: "center",
})
const GridPostCardFile = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
})

export const PostCard = ({
  index,
  imageSrc,
  imageBlob,
  type,
  videoBlob,
}: imageProps) => {
  return (
    <GridPostCard container>
      <PostCardIndex index={index} />
      <GridPostCardFile container item xs={11}>
        <PostCardFile
          imageSrc={imageSrc}
          imageBlob={imageBlob}
          type={type}
          videoBlob={videoBlob}
        />
        <PostCardButton imageSrc={imageSrc} />
      </GridPostCardFile>
    </GridPostCard>
  )
}
