import { Container, Grid } from '@mui/material'
import { PostBox } from './components/post_box/post_box'
import { UploadFileBox } from './components/upload_file_box/upload_file_box'

export const Home = () => {
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <UploadFileBox />
                    <PostBox />
                </Grid>
            </Grid>
        </Container>
    )
}
