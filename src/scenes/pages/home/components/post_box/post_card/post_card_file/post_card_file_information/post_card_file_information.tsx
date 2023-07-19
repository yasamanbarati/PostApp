import { Box, styled } from '@mui/material'
import { Image } from 'scenes/components/box/box_image/box_image'
import { VideoBox } from 'scenes/components/box/box_video/box_video'
import { CustomTypography } from 'scenes/components/box/box_typography/box_typography'
import { textStyle } from 'services/style/style'
import { imageProps } from 'services/type/type'

const InformationBox = styled(Box)({
  width: '89%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const imageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '15px',
  margin: '5px 10px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '60px 60px',
}

export const PostCardFileInformation = ({
  imageBlob,
  imageSrc,
  type,
  videoBlob,
}: imageProps) => {
  return (
    <InformationBox>
      {type === 'IMAGE' ? (
        <Image imageBlob={imageBlob} imageStyle={imageStyle} />
      ) : (
        <VideoBox imageStyle={imageStyle} videoBlob={videoBlob} />
      )}
      <CustomTypography text={imageSrc} textStyle={textStyle} />
    </InformationBox>
  )
}
