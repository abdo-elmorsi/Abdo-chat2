import {createSlice} from '@reduxjs/toolkit'

export const ToggleMenuSlice = createSlice({
    name: 'toggleMenu',
    initialState: {
        value: true,
    },
    reducers: {
        toggle: state => {
            state.value = !state.value
        },
        sidebarMini: state => {
            state.value = true
        }
    },
})

// Action creators are generated for each case reducer function
export const {toggle, sidebarMini} = ToggleMenuSlice.actions

export default ToggleMenuSlice.reducer