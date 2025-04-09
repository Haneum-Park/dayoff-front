'use client';

import { memo } from 'react';

import CustomAccordion from '@blocks/common/Accordion';
import type { TypeContentProps, TypeAtomRecord } from '@stores/main/record';

import Content from './Content';
import { MainContentWrap, MasonryWrap } from './styled';

function Record({
  educations,
  careers,
  contacts,
  career_desc,
  languages,
  // skills,
  project_desc,
  documents,
  licenseNawards,
  activities,
  etc,
}: TypeAtomRecord) {
  const recordTrack = [
    { educations, careers, licenseNawards, contacts },
    { project_desc, career_desc },
    { languages, documents, activities, etc },
  ];

  return (
    <MainContentWrap justify='between' align='start' gap='5'>
      {recordTrack.map((track, index) => (
        <MasonryWrap content='center' direction='column' key={`record-track-${index}`}>
          {Object.entries(track).map(([key, value]) => (
            <CustomAccordion
              key={`track-${key}`}
              title={value.title}
              value={key}
              children={
                <Content
                  target={key as keyof TypeAtomRecord}
                  content={value.list as TypeContentProps['list']}
                />
              }
            />
          ))}
        </MasonryWrap>
      ))}
    </MainContentWrap>
  );
}

export default memo(Record);
