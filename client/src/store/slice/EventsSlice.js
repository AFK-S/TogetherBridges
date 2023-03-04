import { createSlice } from "@reduxjs/toolkit";

const EventsSlice = createSlice({
  name: "events",
  initialState: {
    upcoming: [
      { name: "HEllo", description: "loremmmmm" },
      { name: "HEllo2", description: "loremmmmm2" },
    ],

    previous: [
      {
        name: "Noteworthy technology acquisitions 2021",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      { name: "HEllo2", description: "prev2" },
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
