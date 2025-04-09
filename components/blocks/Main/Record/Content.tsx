'use client';

import { useId } from 'react';
import Link from '@commons/Link';
import {
  type TypeAtomRecord,
  type TypeContentListProps,
} from '@stores/main/record';
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
  content: TypeContentListProps[];
  target: keyof TypeAtomRecord;
}

const oneLineTargets = ['contacts', 'languages', 'documents'];

function RecordContent({
  target,
  content,
}: IRecordContentProps) {
  const uuid = useId();

  const onRouter = (url?: string) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <ContentDescWrap direction='column' gap='2' align='start' content='center'>
      {content.map((item, idx) => (
        <ContentListWrap
          justify={oneLineTargets.includes(target) ? 'between' : 'start'}
          direction={oneLineTargets.includes(target) ? 'row' : 'column'}
          align={oneLineTargets.includes(target) ? 'center' : 'start'}
          key={`content-${uuid}-${idx}`}
        >
          <ContentDesc weight='bold' size='3'>
            {item.path ? <Link href={item.path}>{item.desc}</Link> : item.desc}
          </ContentDesc>
          <ContentMemo as='p' size='2' weight='regular' route={item.route} onClick={() => onRouter(item.route)}>
            {/* // * 마스킹 부분 사용자 인증 후 개인번호 열람가능 */}
            {item.masking ? generateMasking(item.memo) : item.memo}
          </ContentMemo>
          {item.extra && item.extra.length > 0 && (
            <ContentExtra>
              {item.extra.map((extra, extraIdx) => (
                <li key={`item-extra-${idx}-${extraIdx}`}>{extra}</li>
              ))}
            </ContentExtra>
          )}
        </ContentListWrap>
      ))}
    </ContentDescWrap>
  )
}

export default RecordContent;