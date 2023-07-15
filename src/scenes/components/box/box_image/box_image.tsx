import { imageProps } from 'services/type/type'

export const Image = ({ imageBlob, imageStyle }: imageProps) => {
  return <img src={imageBlob} alt="post image" style={imageStyle} />
}
