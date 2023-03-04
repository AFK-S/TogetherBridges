import { createSlice } from '@reduxjs/toolkit'

const LoggedInSlice = createSlice({
    name: "auth",
    initialState: true,
    reducers: {
        logout: (state) => {
            state = false;
            return state;
        },
        login: (state) => {
            state = true;
            return state;
        }
    },
})

export { LoggedInSlice }
export const { logout, login } = LoggedInSlice.actions