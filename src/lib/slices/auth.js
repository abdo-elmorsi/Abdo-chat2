import { createSlice } from '@reduxjs/toolkit'

export const fetchUserSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
    },
  }
})


export const { getUser } = fetchUserSlice.actions
export default fetchUserSlice.reducer
