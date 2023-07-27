//@ts-nocheck

import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { MediaBodyType } from 'scenes/_slice/type'
import { useAppSelector } from 'setup/redux/react-hooks'
import { PostCard } from './post_card/post_card'

export const PostBox = () => {
  const List = useAppSelector(state => state.home.PostList)

  const [listItem, setListItem] = useState<MediaBodyType[]>([])

  useEffect(() => {
    setListItem(List)
  }, [List])

  const sortList = (newState) => {
    // const [, ...newList] = newState
    const newList = newState.map((item) => {
      if (item.type === 'IMAGE')
        return {
          type: 'IMAGE',
          imageBlob: item.imageBlob,
          name: item.name,
        }
      else
        return {
          type: 'VIDEO',
          videoBlob: item.videoBlob,
          posterBlob: item.posterBlob,
          name: item.name,
        }
    })
    setListItem(newList)
  }

  return (
    <Box my={2}>
      <ReactSortable
        list={listItem.map((item) => ({ ...item, chosen: true }))}
        setList={sortList}
        animation={200}

      >

        {listItem.map((item, index) => {
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
      </ReactSortable>
    </Box >
  )
}
