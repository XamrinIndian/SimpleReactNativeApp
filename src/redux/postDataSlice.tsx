import {createSlice} from '@reduxjs/toolkit';

import {PostState} from './models';

const initialState = {
  posts: PostState,
};

const postDataSlice = createSlice({
  name: 'postDataSlice',
  initialState,
  reducers: {
    posts: (state, action) => {
      // console.log('possstdata', action.payload);
      state.posts = action.payload;
    },
  },
});
export default postDataSlice.reducer;
export const {posts} = postDataSlice.actions;
