import { Grid } from '@mui/material'
import { CutsomTypography } from 'scenes/components/box/box_typography/box_typography'

interface props {
    index: string
}

const indexStyle = {
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '0',
    letterSpacing: '0em',
    color: '#888888',
    width: "30px",
    height: "30px",
    backgroundColor: "#ececec",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
export const PostCardIndex = ({ index }: props) => {
    return (
        <Grid item xs={1}>
            <CutsomTypography text={index} textStyle={indexStyle} />
        </Grid>
    )
}
