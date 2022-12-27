import { Button } from "@mui/material"
import { ButtonProps } from "services/type/type"

export const CustomButton = ({ onClickEvent, sxStyle, Text, color }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      disableElevation={true}
      onClick={onClickEvent}
      sx={{ ...sxStyle }}
      color={color}>
      {Text}
    </Button>
  )
}
