import { Imageprops } from "services/type/type"


const Imagestyle = {
  width: "60px",
  height: "60px",
  borderRadius: "15px",
  margin: "5px 10px"
}
export const BoxImage = ({ imageSrc }: Imageprops) => {
  return (
    <img src={imageSrc} alt="post image" style={Imagestyle} />
  )
}
