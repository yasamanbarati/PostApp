import { Imageprops } from "services/type/type"


const Imagestyle = {
  width: "60px",
  height: "60px",
  borderRadius: "15px",
  margin: "5px 10px"
}
export const BoxImage = ({ imageBlob }: Imageprops) => {
  return (
    <img src={imageBlob} alt="post image" style={Imagestyle} />
  )
}
