/* eslint-disable camelcase */
import React, { memo } from 'react';

import type { ProxyRecord } from '@store/main/record';

import {
  MainContentWrap,
  MasonryWrap,
  ContentWrap,
  ContentListWrap,
  ContentTitle,
  ContentDesc,
  ContentMemo,
  // ContentUl,
} from './styles';

function Record({
  educations,
  careers,
  contacts,
  career_desc,
  languages,
  skills,
  documents,
  licenseNawards,
  activities,
  etc,
}: ProxyRecord['record']) {
  return (
    <MainContentWrap>
      <MasonryWrap>
        <ContentWrap>
          <ContentTitle>{educations.title}</ContentTitle>
          {educations.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>{careers.title}</ContentTitle>
          {careers.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>{licenseNawards.title}</ContentTitle>
          {licenseNawards.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>{contacts.title}</ContentTitle>
          {contacts.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
      </MasonryWrap>
      <MasonryWrap>
        <ContentWrap>
          <ContentTitle>{career_desc.title}</ContentTitle>
          {career_desc.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
      </MasonryWrap>
      <MasonryWrap>
        <ContentWrap>
          <ContentTitle>{languages.title}</ContentTitle>
          {languages.list.map((item, idx) => (
            <ContentListWrap className='round-rectangle' key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>{documents.title}</ContentTitle>
          {documents.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>{activities.title}</ContentTitle>
          {activities.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>{etc.title}</ContentTitle>
          {etc.list.map((item, idx) => (
            <ContentListWrap key={`education-${idx}`}>
              <ContentDesc>{item.desc}</ContentDesc>
              <ContentMemo>{item.memo}</ContentMemo>
            </ContentListWrap>
          ))}
        </ContentWrap>
      </MasonryWrap>
    </MainContentWrap>
  );
}

export default memo(Record);
