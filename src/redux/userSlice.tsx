import {createSlice} from '@reduxjs/toolkit';
import {LoginUserState} from './models';

const initialState = {
  user: LoginUserState,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginSlice: (state, action) => {
      console.log('userslice is', action.payload);
      state.user = {...action.payload};
    },
  },
});
export default userSlice.reducer;
export const {loginSlice} = userSlice.actions;
