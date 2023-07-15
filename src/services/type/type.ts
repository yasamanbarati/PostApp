import { SxProps } from '@mui/material'
import { CSSProperties } from 'react'

export interface TextBoxProps {
  variant?: any
  textStyle?: SxProps
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
  index?: string | undefined
  imageSrc?: string | undefined
  imageBlob?: string | undefined
  Imagestyle?: CSSProperties
  videoBlob?: string | undefined
  posterBlob?: string | undefined
  type?: 'IMAGE' | 'VIDEO'
}
// export interface Videoprops {
//   index?: string | undefined
//   videoBlob?: string | undefined
//   posterBlob?: string | undefined
//   Imagestyle?: CSSProperties
//   type?: 'VIDEO'
// }
