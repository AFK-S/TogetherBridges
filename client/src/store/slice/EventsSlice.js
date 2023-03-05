import { createSlice } from "@reduxjs/toolkit";

const EventsSlice = createSlice({
  name: "events",
  initialState: {
    upcoming: [
      { name: "Food Donation", description: " Helps counter poverty, hunger and at the same time, it can improve harmony, friendliness, and trust among residents", date :"8 Mrach, 2023" },
      { name: "Vaccination Drive", description: "The vaccination session is from 9 am to 5 pm. It will be a comprehensive drive for all age groups." ,
      date : "13 April, 2023"},
    ],

    previous: [
      {
        name: "Noteworthy technology acquisitions ",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        date :"8 Mrach, 2022"
      },
      { name: "Event-2", description: "Helps counter poverty, hunger and at the same time, it can improve harmony, friendliness, and trust among residents",date :"15 Janurary, 2023" },
    ],

    announcements: [
      {
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, provident? Minima quasi blanditiis quas inventore?",
      },
      {
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, provident? Minima quasi blanditiis quas inventore?",
      },
    ],
  },
  reducers: {
    addEvent: (state, action) => {
      state.upcoming.push(action.payload);
    },
    addAnnouncement: (state, action) => {
      state.announcements.push(action.payload);
    },
  },
});

export { EventsSlice };
export const { addEvent, addAnnouncement } = EventsSlice.actions;
