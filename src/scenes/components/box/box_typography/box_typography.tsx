import { Fragment } from 'react'
import { Typography } from '@mui/material'
import { TextBoxProps } from 'services/type/type'

export const CutsomTypography = ({ variant, textStyle, text, textColor }: TextBoxProps) => {
  return (
    <Fragment>
      <Typography
        variant={variant}
        sx={{
          ...textStyle,
        }}
        color={textColor}
      >
        {text}
      </Typography>
    </Fragment>
  )
}
