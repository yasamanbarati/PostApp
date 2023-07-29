import { ChangeEvent } from 'react'
import { Button, styled, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { dispatch } from 'setup/redux/store'
import { setPostListAction } from 'scenes/_slice/home.slice'
import { MediaBodyType } from 'scenes/_slice/type'
import { useAppSelector } from 'setup/redux/react-hooks'
import { useTranslation } from 'react-i18next'

const ButtonBox = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  height: '150px',
  backgroundColor: theme.palette.primary.contrastText,
  border: '2px dashed',
  borderColor: theme.palette.primary.main,
  borderRadius: '20px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastText,
  },
  '& input': {
    width: '100%',
    height: '100%',
    opacity: '0',
    position: 'absolute',
    cursor: 'pointer',
  },
}))

export const UploadFile = () => {
  const { t } = useTranslation()
  const loading = useAppSelector(state => state.home.loading)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const FileList = Object.entries(e.target.files)
    for (let i = 0; i < FileList.length; i++) {
      const blob = URL.createObjectURL(e.target.files[i])
      const ImageName = e.target.files[i].name
      const typeFile = e.target.files[i].type

      const isImage = typeFile.includes('image')

      if (isImage) {
        const fileObj: MediaBodyType = {
          type: 'IMAGE',
          imageBlob: blob,
          name: ImageName,
        }
        dispatch(setPostListAction(fileObj))
      } else {
        const fileObj: MediaBodyType = {
          type: 'VIDEO',
          videoBlob: blob,
          posterBlob: blob,
          name: ImageName,
        }
        dispatch(setPostListAction(fileObj))
      }
    }
  }

  return (
    <ButtonBox
      variant="contained"
      disableElevation={true}
      aria-label="upload picture"
    >
      <input
        accept="video/*,image/*"
        type="file"
        onChange={handleFileChange}
        multiple={true}
      />
      <Add color="primary" fontSize="medium" fontWeight="800" />
      <Typography
        sx={{
          fontSize: '1rem', fontWeight: '600', margin: '8px'
        }}
        color="primary"
      >
        {t('ButtonTitle')}
      </Typography>
    </ButtonBox>
  )
}
