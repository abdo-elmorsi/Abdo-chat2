import { createSlice } from '@reduxjs/toolkit'

export const ToggleAddMarkerRoutingMachineSlice = createSlice({
    name: 'toggleAddMarkerRoutingMachine',
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = ToggleAddMarkerRoutingMachineSlice.actions

export default ToggleAddMarkerRoutingMachineSlice.reducer