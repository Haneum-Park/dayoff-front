import React, { memo } from 'react';

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

function Record() {
  return (
    <MainContentWrap>
      <MasonryWrap>
        <ContentWrap>
          <ContentTitle>학력</ContentTitle>
          <ContentListWrap>
            <ContentDesc>조선대학교, 컴퓨터 통계학과</ContentDesc>
            <ContentMemo>2013.03 ~ 2019.02 / 대한민국, 광주광역시 / 3.4(4.5)</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>세종고등학교, 이과계열</ContentDesc>
            <ContentMemo>2010.03 ~ 2013.02 / 대한민국, 광주광역시</ContentMemo>
          </ContentListWrap>
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>학력</ContentTitle>
          <ContentListWrap>
            <ContentDesc>조선대학교, 컴퓨터 통계학과</ContentDesc>
            <ContentMemo>2013.03 ~ 2019.02 / 대한민국, 광주광역시 / 3.4(4.5)</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>세종고등학교, 이과계열</ContentDesc>
            <ContentMemo>2010.03 ~ 2013.02 / 대한민국, 광주광역시</ContentMemo>
          </ContentListWrap>
        </ContentWrap>
      </MasonryWrap>
      <MasonryWrap>
        <ContentWrap>
          <ContentTitle>경력기술서</ContentTitle>
          <ContentListWrap>
            <ContentDesc></ContentDesc>
            <ContentMemo></ContentMemo>
          </ContentListWrap>
        </ContentWrap>
      </MasonryWrap>
      <MasonryWrap>
        <ContentWrap>
          <ContentTitle>연락처</ContentTitle>
          <ContentListWrap>
            <ContentDesc>이메일</ContentDesc>
            <ContentMemo>qkrgksdma17@gmail.com</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>이메일</ContentDesc>
            <ContentMemo>qksdbf15@naver.com</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>이메일</ContentDesc>
            <ContentMemo>qksdbf15@gmail.com</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>개인번호</ContentDesc>
            <ContentMemo>010-2397-8172</ContentMemo>
          </ContentListWrap>
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>구사언어</ContentTitle>
          <ContentListWrap className='round-rectangle'>
            <ContentDesc>한국어</ContentDesc>
            <ContentMemo>모국어</ContentMemo>
          </ContentListWrap>
          <ContentListWrap className='round-rectangle'>
            <ContentDesc>영어</ContentDesc>
            <ContentMemo>토익(650)</ContentMemo>
          </ContentListWrap>
        </ContentWrap>
        <ContentWrap>
          <ContentTitle>기타 포트폴리오</ContentTitle>
          <ContentListWrap>
            <ContentDesc>주소</ContentDesc>
            <ContentMemo>https://day-off.xyz</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>주소</ContentDesc>
            <ContentMemo>https://portfolio.day-off.xyz</ContentMemo>
          </ContentListWrap>
          <ContentListWrap>
            <ContentDesc>주소</ContentDesc>
            <ContentMemo>https://allreva.com</ContentMemo>
          </ContentListWrap>
        </ContentWrap>
      </MasonryWrap>
    </MainContentWrap>
  );
}

export default memo(Record);
