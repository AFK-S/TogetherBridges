import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "NGO 1",
    location: "Mumbai",
    image: "https://cdn-icons-png.flaticon.com/512/1/1247.png",
    address:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut illo vero, harum debitis numquam corrupti! Repudiandae modi necessitatibus sequi ipsum aut commodi voluptatem adipisci laudantium tenetur ipsa? Officiis, quidem labore?",
    email: "msdim@idm.sx",
    phone: "1234567890",
    incharge: "Mr. XYZ",
    website: "https://www.google.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com",
  },
  reducers: {},
});

export { UserSlice };
