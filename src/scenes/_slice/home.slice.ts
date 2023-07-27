import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MediaBodyType } from './type'

interface ReduxBodyType {
  PostList: MediaBodyType[]
  loading: Boolean
}

const initialState: ReduxBodyType = {
  PostList: [],
  loading: true,
}

const setPostList = (
  state: ReduxBodyType,
  action: PayloadAction<MediaBodyType>,
) => {
  const isExist = state.PostList.findIndex(e => e.name === action.payload.name)
  if (isExist === -1) {
    state.PostList = [...state.PostList, action.payload]
  }
}
const setLoading = (state: ReduxBodyType, action: PayloadAction<Boolean>) => {
  state.loading = action.payload
}

const setRemovePostCard = (
  state: ReduxBodyType,
  action: PayloadAction<string | undefined>,
) => {
  const item = state.PostList.findIndex(item => {
    return item.name === action.payload
  })
  state.PostList = state.PostList.filter((list, index) => {
    return index !== item
  })
}

const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setPostList,
    setRemovePostCard,
    setLoading,
  },
})

export const {
  setPostList: setPostListAction,
  setRemovePostCard: setRemovePostCardAction,
  setLoading: setLoadingAction,
} = homeSlice.actions

export default homeSlice.reducer
