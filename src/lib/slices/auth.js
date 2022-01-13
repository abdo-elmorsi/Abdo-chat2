import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const fetchUserSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(Cookies.get("User")) || null
  },
  reducers: {
    getUser: (state, action) => {
      state.user = {...action.payload}
    },
    SinOut: (state) => {
      state.user = null
    },
  }
})


export const { getUser,SinOut } = fetchUserSlice.actions
export default fetchUserSlice.reducer
