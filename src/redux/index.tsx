import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import postDataSlice from './postDataSlice';
import userSlice from './userSlice';
const reducer = combineReducers({
  postDataSlice,
  userSlice,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
