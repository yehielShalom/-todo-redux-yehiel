import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      todo: "Learn Redux",
      date: "2021-01-01",
      time: "12:00",
      isCompleted: false,
    },
    {
      id: 2,
      todo: "Learn Redux",
      date: "2021-01-01",
      time: "12:00",
      isCompleted: false,
    },
    {
      id: 3,
      todo: "Learn Redux",
      date: "2021-01-01",
      time: "12:00",
      isCompleted: false,
    },
  ],
  toggle: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleAction: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleAction } = todoSlice.actions;
export default todoSlice.reducer;
