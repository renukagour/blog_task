import { createSlice } from "@reduxjs/toolkit";
import { posts } from "./Data";
const postsSlice = createSlice({
  name: "posts",
  initialState: posts,
  reducers: {
    addblog: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateblog: (state, action) => {
      const { id, title, content, author } = action.payload;
      const updatedblog = state.find((post) => post.id == id);
      if (updatedblog) {
        updatedblog.title = title;
        updatedblog.content = content;
        updatedblog.author = author;
      }
    },
    deleteblog: (state, action) => {
      const { id } = action.payload;
      const updatedblog = state.find((post) => post.id == id);
      if (updatedblog) {
        state = state.filter((post) => post.id != id);
        return state;
      }
    },
  },
});

export const { addblog, updateblog, deleteblog } = postsSlice.actions;
export default postsSlice.reducer;
