/* eslint-disable camelcase */
import React, { memo } from 'react';

import type { ProxyRecord } from '@store/main/record';

import ContentAccordian from './ContentAccordian';
import { MainContentWrap, MasonryWrap } from './styles';

function Record({
  educations,
  careers,
  contacts,
  career_desc,
  languages,
  // skills,
  documents,
  licenseNawards,
  activities,
  etc,
}: ProxyRecord['record']) {
  return (
    <MainContentWrap>
      <MasonryWrap>
        {/* // * Education */}
        <ContentAccordian target='educations' contents={educations} />
        {/* // * Career */}
        <ContentAccordian target='careers' contents={careers} />
        {/* // * License and Awards */}
        <ContentAccordian target='licenseNawards' contents={licenseNawards} />
        {/* // * Contact */}
        <ContentAccordian isAccordian={true} target='contacts' contents={contacts} />
      </MasonryWrap>
      <MasonryWrap>
        {/* // * Career detail descriptions */}
        <ContentAccordian target='career_desc' contents={career_desc} />
      </MasonryWrap>
      <MasonryWrap>
        {/* // * Languages */}
        <ContentAccordian target='languages' contents={languages} />
        {/* // * Documents */}
        <ContentAccordian cursor='pointer' target='documents' contents={documents} />
        {/* // * Activities */}
        <ContentAccordian target='activities' contents={activities} />
        {/* // * Etc Infos */}
        <ContentAccordian target='etc' contents={etc} />
      </MasonryWrap>
    </MainContentWrap>
  );
}

export default memo(Record);
