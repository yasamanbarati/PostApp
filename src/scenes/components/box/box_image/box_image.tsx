import { Imageprops } from 'services/type/type'
// refactor change Imageprops to ImageProps

//refactor change Imagestyle to imageStyle

// change name BoxImage to Image
export const BoxImage = ({ imageBlob, Imagestyle }: Imageprops) => {
  return <img src={imageBlob} alt="post image" style={Imagestyle} />
}
