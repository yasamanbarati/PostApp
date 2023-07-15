import { Box } from '@mui/material'
import { CustomTypography } from 'scenes/components/box/box_typography/box_typography'
import { UploadFile } from 'scenes/components/box/box_upload/box_upload'
import { titleStyle } from 'services/style/style'

export const UploadFileBox = () => {
  return (
    <Box mt={3}>
      <CustomTypography text="بارگذاری ویدئو با عکس" textStyle={titleStyle} />
      <UploadFile />
    </Box>
  )
}
