/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderState = {
  nameKor: string;
  nameEng: string;
  pathname: string;
  key: string;
  isActive: boolean;
};

export type HeaderDataState = {
  headers: HeaderState[];
};

const initialState: HeaderDataState = {
  headers: [
    {
      nameKor: '블로그 홈',
      nameEng: 'Home',
      pathname: '/blog',
      key: 'blog-home',
      isActive: true,
    },
    {
      nameKor: '포스팅',
      nameEng: 'posting',
      pathname: '/blog/post/new',
      key: 'blog-post-new',
      isActive: false,
    },
  ],
};

const blogHeaderSlice = createSlice({
  name: 'blogHeader',
  initialState,
  reducers: {
    onChangeActive: (state, action: PayloadAction<HeaderState['key']>) => {
      const key = action.payload;
      state.headers.forEach((header) => {
        if (key === header.key) header.isActive = true;
        else header.isActive = false;
      });
    },
  },
});

export default blogHeaderSlice;
