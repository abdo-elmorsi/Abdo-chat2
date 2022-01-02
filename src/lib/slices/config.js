import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { encryptName } from "../../helpers/encryptions";

let initialConfig = {
    darkMode: Cookies.get(encryptName('config')) && JSON.parse(Cookies.get(encryptName("config"))).darkMode,
    language: 'en'
}

const storage = (key, value) => {
    initialConfig[key] = value;
    Cookies.set(encryptName('config'), JSON.stringify(initialConfig));
}

export const ConfigSlice = createSlice({
    name: 'config',
    initialState: {
        ...initialConfig
    },
    reducers: {
        darkMode: (state) => {
            state.darkMode = !state.darkMode;
            storage('darkMode', state.darkMode);
        },
        changeLanguage: (state, action) => {
            state.language = action.payload;
            storage('language', state.language)
        },
        setConfig: (state, action) => {
            Object.assign(state, action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    darkMode,
    setConfig,
    changeLanguage } = ConfigSlice.actions

export default ConfigSlice.reducer
