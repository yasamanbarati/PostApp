import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MediaBodyType } from './type'

interface ReduxBodyType {
  PostList: MediaBodyType[]
}

const initialState: ReduxBodyType = {
  PostList: [],
}

const setPostList = (
  state: ReduxBodyType,
  action: PayloadAction<MediaBodyType>,
) => {
  const NewPost = action.payload
  console.log(`NewPost`, NewPost)
  const isExist = state.PostList.findIndex(e => e.name === NewPost.name)
  if (isExist <= 0) {
    state.PostList = [...state.PostList, NewPost]
  }
}
const setRemovePostCard = (
  state: ReduxBodyType,
  action: PayloadAction<string | undefined>,
) => {
  const item = state.PostList.findIndex(item => {
    return item.name === action.payload
  })
  state.PostList = state.PostList.filter((index, list) => {
    return list !== item
  })
}

const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setPostList,
    setRemovePostCard,
  },
})

export const {
  setPostList: setPostListAction,
  setRemovePostCard: setRemovePostCardAction,
} = homeSlice.actions

export default homeSlice.reducer
