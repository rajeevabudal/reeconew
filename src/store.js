import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './components/redux/orderSlice'
export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
})