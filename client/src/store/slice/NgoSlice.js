import { createSlice } from '@reduxjs/toolkit'

const NgoSlice = createSlice({
    name: "ngo",
    initialState: [
        {
            "name": "NGO 1",
            "address": "Address 1",
            "phone": "1234567890",
            "id": 1
        },
        {
            "name": "NGO 2",
            "address": "Address 2",
            "phone": "1234567890",
            "id": 2
        },
        {
            "name": "NGO 3",
            "address": "Address 3",
            "phone": "1234567890",
            "id": 3
        }
    ],
    reducers: {
    },
})

export { NgoSlice }