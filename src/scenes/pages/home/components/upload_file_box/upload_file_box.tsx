import { useEffect, useState } from 'react'
import { Box, Stack, Switch, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { UploadFile } from 'scenes/components/box/box_upload/box_upload'
import { titleStyle } from 'services/style/style'
import { setLanguageAction } from 'scenes/_slice/home.slice'
import i18next from 'i18next'

export const UploadFileBox = () => {
  // const language = useAppSelector(state => state.home.loading)

  const { t } = useTranslation()
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const inputChange = event.target.checked

    setChecked(inputChange);
  };
  useEffect(() => {
    if (checked === true) {
      i18next.changeLanguage("fa")
    } else {
      i18next.changeLanguage("en")
    }
  }, [checked])

  return (
    <Box mt={3}>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
        <Typography>فارسی</Typography>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography>English</Typography>
      </Stack>
      <Typography
        sx={{
          ...titleStyle,
        }}
      >
        {t('title')}
        {/* {t(`${text}`)} */}
      </Typography>
      <UploadFile />
    </Box >
  )
}
