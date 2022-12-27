import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { useAppSelector } from "setup/redux/react-hooks"
import { PostCard } from "./post_card/post_card"
import { initializeAppData } from "services/server/service"

export const PostBox = () => {

  const [index, setIndex] = useState(0)
  const List = useAppSelector(state => state.home.PostList)

  // useEffect(() => { initializeAppData() }, [])

  return (
    <Box my={2}>
      {List.map((item) => {
        return <PostCard index={(index + 1).toString()} imageSrc={item} />
      })}
    </Box>
  )
}
