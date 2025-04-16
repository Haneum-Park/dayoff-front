'use client';

import { memo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useAtom } from 'jotai';

import CustomAccordion from '@blocks/common/Accordion';
import {
  atomRecord,
  type TypeAtomRecord,
  type TypeRecordList,
} from '@stores/record';
import { cloneDeep } from '@utils/common.util';

import Content from './Content';
import { MainContentWrap, MasonryWrap } from './styled';

function Record() {
  const t = useTranslations('kanuRecord');
  const [record, setRecord] = useAtom(atomRecord);
  const recordTrack = [
    { educations: record.educations, careers: record.careers, contacts: record.contacts },
    { project_desc: record.project_desc, career_desc: record.career_desc },
    { languages: record.languages, skills: record.skills, documents: record.documents, activities: record.activities, etc: record.etc },
  ];

  useEffect(() => {
    const cloneRecord = cloneDeep<TypeAtomRecord>(record);
    (Object.keys(cloneRecord) as (keyof TypeAtomRecord)[]).forEach((key: keyof TypeAtomRecord) => {
      const item = cloneRecord[key];
      item.title = t(`${key}.title`);
      item.list = (Object.keys(item.list) as Array<keyof TypeRecordList>).reduce((acc: TypeRecordList, kkey) => {
        acc[kkey] = item.list[kkey] as TypeRecordList[keyof TypeRecordList];
        acc[kkey].desc = t(`${key}.list.${kkey}.desc` as any);
        acc[kkey].memo = t(`${key}.list.${kkey}.memo` as any);
        if (acc[kkey].extra) {
          Object.keys(acc[kkey].extra).forEach((extraKey) => {
            acc[kkey]!.extra![extraKey] = t(`${key}.list.${kkey}.extra.${extraKey}` as any);
          });
        }
        if (acc[kkey].path) {
          acc[kkey].path = t(`${key}.list.${kkey}.path` as any);
        }
        if (acc[kkey].route) {
          acc[kkey].route = t(`${key}.list.${kkey}.route` as any);
        }
        return acc;
      }, {});
    });

    setRecord(cloneRecord);
  }, [t, record, setRecord]);

  return (
    <MainContentWrap justify='between' align='start' gap='5'>
      {recordTrack.map((track, index) => (
        <MasonryWrap content='center' direction='column' key={`record-track-${index}`}>
          {Object.entries(track).map(([key, value]) => (
            <CustomAccordion
              key={`track-${key}`}
              title={value.title}
              value={key}
              children={<Content target={key as keyof TypeAtomRecord} content={value.list} />}
            />
          ))}
        </MasonryWrap>
      ))}
    </MainContentWrap>
  );
}

export default memo(Record);
