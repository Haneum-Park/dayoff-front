import { createSlice } from '@reduxjs/toolkit';

export type FooterInfoState = {
  baseInfo: string[];
  copyright: string[];
};

const initialState: FooterInfoState = {
  baseInfo: [
    'NAME: 박한음',
    'EMAIL: qkrgksdma17@gmail.com',
    'CAREER: Web Developer',
    'PHONE: 01046368172',
    'ADDR: 광주광역시 북구',
  ],
  copyright: [
    'KANUPAK',
    '2022 copyright ©',
    'qkrgksdma17@gmail.com',
    'All rights reserved.',
  ],
};

// TODO: API

const footerInfoSlice = createSlice({
  name: 'footerInfo',
  initialState,
  reducers: {},
});

export default footerInfoSlice;
