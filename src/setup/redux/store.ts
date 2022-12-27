import { configureStore } from '@reduxjs/toolkit'
import homeReducer from 'scenes/_slice/home.slice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const { dispatch, getState } = store
