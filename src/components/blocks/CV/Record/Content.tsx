'use client';

import { useId } from 'react';
import { Link } from '@i18n/routing';
import {
  type TypeAtomRecord,
  type TypeRecordList,
} from '@stores/record';
import { generateMasking } from '@utils/common.util';

import {
  ContentDescWrap,
  ContentListWrap,
  ContentDesc,
  ContentMemo,
  ContentExtra,
} from './styled';

interface IRecordContentProps {
  isAccordion?: boolean;
  content: TypeRecordList;
  target: keyof TypeAtomRecord;
}

const oneLineTargets = ['contacts', 'languages', 'documents'];

function RecordContent({
  target,
  content = {},
}: IRecordContentProps) {
  const uuid = useId();

  const onRouter = (url?: string) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <ContentDescWrap direction='column' gap='2' align='start' content='center'>
      {Object.keys(content).map((key, idx) => (
        <ContentListWrap
          justify={oneLineTargets.includes(target) ? 'between' : 'start'}
          direction={oneLineTargets.includes(target) ? 'row' : 'column'}
          align={oneLineTargets.includes(target) ? 'center' : 'start'}
          key={`content-${uuid}-${idx}`}
        >
          <ContentDesc weight='bold' size='3'>
            {content[key]?.path ? <Link href={content[key].path}>{content[key].desc}</Link> : content[key]?.desc}
          </ContentDesc>
          <ContentMemo as='p' size='2' weight='regular' route={content[key]?.route} onClick={() => onRouter(content[key]?.route)}>
            {/* // * 마스킹 부분 사용자 인증 후 개인번호 열람가능 */}
            {content[key]?.masking ? generateMasking(content[key].memo) : content[key]?.memo}
          </ContentMemo>
          {content[key]?.extra && Object.keys(content[key].extra).length > 0 && (
            <ContentExtra>
              {Object.keys(content[key].extra).map((extra, extraIdx) => (
                <li key={`content[key]-extra-${idx}-${extraIdx}`}>{extra}</li>
              ))}
            </ContentExtra>
          )}
        </ContentListWrap>
      ))}
    </ContentDescWrap>
  );
}

export default RecordContent;