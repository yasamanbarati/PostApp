import { Box } from '@mui/material'
import { CutsomTypography } from 'scenes/components/box/box_typography/box_typography'
import { BoxUploud } from 'scenes/components/box/box_uploud/box_uploud'
import { titleStyle } from 'services/style/style'

export const UploudFileBox = () => {
  return (
    <Box mt={3}>
      {/* refactor : CutsomTypography to CustomTypography */}
      <CutsomTypography text="بارگذاری ویدئو با عکس" textStyle={titleStyle} />
      {/* refactor : BoxUploud to BoxUpload*/}
      <BoxUploud />
    </Box>
  )
}
