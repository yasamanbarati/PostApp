import { Container, Grid } from "@mui/material"
import { PostBox } from "./components/post_box/post_box"
import { UploudFileBox } from "./components/uploud_file_box/uploud_file_box"

export const Home = () => {
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4}>
                    <UploudFileBox />
                    <PostBox />
                </Grid>
            </Grid>
        </Container>
    )
}
