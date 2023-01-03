import { Imageprops } from "services/type/type"

export const BoxImage = ({ imageBlob,Imagestyle }: Imageprops) => {
  return (
    <img src={imageBlob} alt="post image" style={Imagestyle} />
  )
}
