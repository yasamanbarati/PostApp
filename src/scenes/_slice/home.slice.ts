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
  // refactor => remove NewPost attribute
  console.log(action.payload)

  const NewPost = action.payload
  // console.log(`NewPost`, NewPost)
  const isExist = state.PostList.findIndex(e => e.name === action.payload.name)
  if (isExist === -1) {
    state.PostList = [...state.PostList, action.payload]
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
