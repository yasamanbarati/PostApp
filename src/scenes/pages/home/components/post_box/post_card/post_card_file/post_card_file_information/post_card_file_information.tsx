import { Box, styled } from "@mui/material"
import { BoxImage } from "scenes/components/box/box_image/box_image"
import { CutsomTypography } from "scenes/components/box/box_typography/box_typography"
import { textStyle } from "services/style/style"
import { Imageprops } from "services/type/type"

const InformationBox = styled(Box)({
    width: "89%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})
export const PostCardFileInformation = ({ imageBlob, imageSrc }: Imageprops) => {
    return (
        <InformationBox>
            <BoxImage imageBlob={imageBlob} />
            <CutsomTypography text={imageSrc} textStyle={textStyle} />
        </InformationBox>
    )
}
