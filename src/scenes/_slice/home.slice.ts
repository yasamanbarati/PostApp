import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ReduxBodyType {
  PostList: string[]
}

const initialState: ReduxBodyType = {
  PostList: [],
}

const setPostList = (state: ReduxBodyType, action: PayloadAction<string>) => {
  const item = action.payload
  const isExist = state.PostList.findIndex(e => e === item)
  if (isExist <= 0) {
    state.PostList = [...state.PostList, item]
  }
}
const setRemovePostCard = (
  state: ReduxBodyType,
  action: PayloadAction<string>,
) => {
  const item = state.PostList.findIndex(item => {
    return item === action.payload
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
