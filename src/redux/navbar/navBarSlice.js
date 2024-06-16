import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    collapsed: false,
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggleNavbar: (state, action) => {
            state.collapsed = !state.collapsed;
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleNavbar } = navbarSlice.actions

export default navbarSlice.reducer