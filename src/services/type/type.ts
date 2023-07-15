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
export interface imageProps {
  index?: string | undefined
  imageSrc?: string | undefined
  imageBlob?: string | undefined
  imageStyle?: CSSProperties
  videoBlob?: string | undefined
  posterBlob?: string | undefined
  type?: 'IMAGE' | 'VIDEO'
}
