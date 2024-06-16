import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './navbar/navBarSlice'

export const store = configureStore({
  reducer: {
    navbar:navbarSlice
  },
})