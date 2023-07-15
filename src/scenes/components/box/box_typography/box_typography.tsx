import { Typography } from '@mui/material'
import { TextBoxProps } from 'services/type/type'

export const CustomTypography = ({
  variant,
  textStyle,
  text,
  textColor,
}: TextBoxProps) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...textStyle,
      }}
      color={textColor}
    >
      {text}
    </Typography>
  )
}
