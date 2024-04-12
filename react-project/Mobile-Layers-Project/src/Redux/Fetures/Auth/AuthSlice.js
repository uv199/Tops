import { createSlice } from "@reduxjs/toolkit"

const user = JSON?.parse(localStorage.getItem("userLogin") || "{}")
const jsonToken = localStorage.getItem("token")
const token = jsonToken ? JSON.parse(jsonToken) : ""

const authSlice = createSlice({
    name : "auth",
    // initialState: { user: {}, token: "" },
    initialState: { user, token },
    reducers: {
        login: (state, { payload }) => {
            // Updates state with user data and token
            state.user = payload.data
            state.token = payload.token

            // Saves user data and token to local storage
            localStorage.setItem("userLogin", JSON.stringify(payload.data))
            localStorage.setItem("token", JSON.stringify(payload.token))
        },
        logout: (state, action) => {
            // Clears user data and token in state and local storage
            // console.log("===>")
            state.user = {}
            state.token = ""
            localStorage.clear()
        }
    }
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions