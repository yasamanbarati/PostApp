import { Box } from "@mui/material"
import { styled } from "@mui/system"
import { imageProps } from "services/type/type"
import { PlayArrowRounded } from "@mui/icons-material"

const Video_box = styled(Box)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    "& video": {
        objectFit: 'cover',
        filter: 'opacity(0.55)',
    },
    "& svg": {
        position: 'absolute',
        width: '35px',
        height: '35px',
    }
})
export const VideoBox = ({ imageStyle, videoBlob }: imageProps) => {
    return (
        <Video_box>
            <video style={imageStyle} preload='none'>
                <source src={videoBlob} type="video/mp4" />
            </video>
            <PlayArrowRounded />
        </Video_box>
    )
}
