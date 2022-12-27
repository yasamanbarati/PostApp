import { SxProps } from '@mui/material'

export interface TextBoxProps {
  variant?: any
  textStyle?: any
  text: string | undefined
  textColor?: string
}
export interface ButtonProps {
  Text?: string | undefined
  onClickEvent?: () => unknown
  sxStyle?: SxProps
  color?: any
}
export interface Imageprops {
  imageSrc: string
}
