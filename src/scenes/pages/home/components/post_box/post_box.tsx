import { Box } from "@mui/system"
import { useAppSelector } from "setup/redux/react-hooks"
import { PostCard } from "./post_card/post_card"

export const PostBox = () => {

  const List = useAppSelector(state => state.home.PostList)

  return (
    <Box my={2}>
      {List.map((item, index) => {
        switch (item.type) {
          case 'VIDEO':
            return <PostCard
              key={index}
              index={(index + 1).toString()}
              imageSrc={item.name}
              type={item.type}
              videoBlob={item.videoBlob}
            />
          case 'IMAGE': <PostCard
            key={index}
            index={(index + 1).toString()}
            imageSrc={item.name}
            imageBlob={item.imageBlob}
            type={item.type}
          />
            // console.log(item.type, item.name, item.imageBlob);
            console.table([item.name, item.imageBlob]);

        }
        // if (item.type === 'VIDEO' || 'IMAGE') {
        //   return <PostCard
        //     key={index}
        //     index={(index + 1).toString()}
        //     imageSrc={item.name}
        //     imageBlob={item.imageBlob}
        //     type={item.type}
        //   // videoBlob={item.videoBlob}
        //   />
        // }
      })}
    </Box>
  )
}
