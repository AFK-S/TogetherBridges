import { createSlice } from '@reduxjs/toolkit'

const NgoSlice = createSlice({
    name: "ngo",
    initialState: [
        {
            "name": "NGO 0",
            "address": "Address 1",
            "phone": "1234567890",
            "id": 0,
            "place": "Mumbai",
            "description":
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque officiis assumenda! Esse quasi tenetur perspiciatis sint quas animi, aut ratione, blanditiis aperiam dicta unde nesciunt. Adipisci culpa dolores nihil?,",
        },
        {
            "name": "NGO 1",
            "address": "Address 2",
            "phone": "1234567890",
            "id": 1,
            "place": "Pune",
            "description":
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque officiis assumenda! Esse quasi tenetur perspiciatis sint quas animi, aut ratione, blanditiis aperiam dicta unde nesciunt. Adipisci culpa dolores nihil?,",
        },
        {
            "name": "NGO 2",
            "address": "Address 3",
            "phone": "1234567890",
            "id": 2,
            "place": "Nashik",
            "description":
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque officiis assumenda! Esse quasi tenetur perspiciatis sint quas animi, aut ratione, blanditiis aperiam dicta unde nesciunt. Adipisci culpa dolores nihil?,",
        }
    ],
    reducers: {
    },
})

export { NgoSlice }