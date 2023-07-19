import { styled } from '@mui/material'
import { PostBox } from './components/post_box/post_box'
import { UploadFileBox } from './components/upload_file_box/upload_file_box'

const Container = styled('div')({
  padding: '20px',
})

export const Home = () => {
  return (
    <Container>
      <UploadFileBox />

      <PostBox />
    </Container>
  )
}
