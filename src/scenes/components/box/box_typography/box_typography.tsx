import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { TextBoxProps } from 'services/type/type'

export const CustomTypography = ({
  variant,
  textStyle,
  text,
  textColor,
}: TextBoxProps) => {

  const { t } = useTranslation()

  return <Typography
    variant={variant}
    sx={{
      ...textStyle,
    }}
    color={textColor}
  >
    {t(`${text}`)}
  </Typography>

}
