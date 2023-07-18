import { Box } from '@mui/system'
import { Sortable } from 'helpers/sortable/sortable'
import { useAppSelector } from 'setup/redux/react-hooks'
import { PostCard } from './post_card/post_card'

export const PostBox = () => {
  const List = useAppSelector(state => state.home.PostList)

  return (
    <Box my={2}>
      <Sortable list={List}>
        {List.map((item, index) => {
          if (item.type === 'IMAGE') {
            return (
              <PostCard
                key={index}
                index={(index + 1).toString()}
                imageSrc={item.name}
                imageBlob={item.imageBlob}
                type={item.type}
              />
            )
          } else {
            return (
              <PostCard
                key={index}
                index={(index + 1).toString()}
                imageSrc={item.name}
                type={item.type}
                videoBlob={item.videoBlob}
              />
            )
          }
        })}
      </Sortable>
    </Box>
  )
}
