import { createSlice } from '@reduxjs/toolkit'

export const ToggleHeaderSlice = createSlice({
    name: 'toggleHeader',
    initialState: {
        value: false,
    },
    reducers: {
        toggleHead: state => {
            state.value = !state.value
        },
        closeHead: state => {
            state.value = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleHead, closeHead } = ToggleHeaderSlice.actions

export default ToggleHeaderSlice.reducer