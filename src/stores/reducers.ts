import { combineReducers } from '@reduxjs/toolkit';

// ? COMMON
import footerInfoSlice from './slices/common/footerInfo';

// ? Blog
import blogHeaderSlice from './slices/blog/common/header';

export const rootReducer = combineReducers({
  // ? COMMON
  [footerInfoSlice.name]: footerInfoSlice.reducer,
  // ? Blog
  [blogHeaderSlice.name]: blogHeaderSlice.reducer,
});
