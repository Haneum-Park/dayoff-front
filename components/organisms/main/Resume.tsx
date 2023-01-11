import React, { memo } from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { useSnapshot } from 'valtio';

import Anchor from '@atom/Anchor';

import { H2 } from '@const/globalStyles';
import type { ProjectResume } from '@const/dummy/main/projects';

import { resetFocusMember } from '@store/main/focusMember';
import { removeProject, proxyProjects } from '@store/main/projects';
import { MEDIA_QUERY } from '@/utils/design.util';

function Resume({ title, desc, tags, links, color, target }: ProjectResume) {
  const { projects } = useSnapshot(proxyProjects);

  const onClose = () => {
    resetFocusMember();
    const idx = projects.findIndex((project) => project.resume && project.resume.target === target);
    if (idx !== -1) {
      removeProject(idx);
    }
  };

  return (
    <ResumeContainer bg={color}>
      <ResumeWrap>
        <ResumeHeaderWrap>
          <IoCloseSharp size={32} cursor='pointer' onClick={() => onClose()} />
        </ResumeHeaderWrap>
        <ResumeBodyWrap>
          <ResumeTitleWrap>
            <span>{title}</span> {target === 'kanu' ? 'developer' : ''}{' '}
            {target === 'xeoye' ? 'designer' : ''}
          </ResumeTitleWrap>
          <ResumeDescWrap>{desc}</ResumeDescWrap>
          <ResumeTagWrap>
            {tags.map((tag, tagIdx) => (
              <div key={`tag-${tagIdx}`}>{tag}</div>
            ))}
          </ResumeTagWrap>
        </ResumeBodyWrap>
        <ResumeLinkWrap>
          {links.map((link, linkIdx) => (
            <Anchor key={`link-${linkIdx}`} href={link}>
              {link}
            </Anchor>
          ))}
        </ResumeLinkWrap>
      </ResumeWrap>
    </ResumeContainer>
  );
}

export default memo(Resume);

const ResumeContainer = styled.div<{ bg: string }>`
  width: 100%;
  max-width: calc(760rem / 16);
  height: 100%;
  background-color: var(--color-${({ bg }) => bg});
  border-radius: ${16 / 16}rem;
  * {
    color: var(--color-white);
  }

  ${MEDIA_QUERY.max('mobile')} {
    max-height: calc(100vw - 4rem);
  }
`;

const ResumeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;

  ${MEDIA_QUERY.max('mobile')} {
    padding: 1rem;
  }
`;

const ResumeHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ResumeBodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${500 / 16}rem;
  padding-top: 5rem;

  ${MEDIA_QUERY.max('desktop')} {
    min-height: initial;
  }

  ${MEDIA_QUERY.max('mobile')} {
    padding-top: 2rem;
  }
`;

const ResumeTitleWrap = styled(H2)`
  font-family: 'Light';
  span {
    font-size: ${28 / 16}rem;
    font-family: 'SemiBold';

    ${MEDIA_QUERY.max('mobile')} {
      font-size: ${24 / 16}rem;
    }
  }
`;

const ResumeDescWrap = styled.div`
  font-family: 'Light';
  font-size: ${18 / 16}rem;
  line-height: 1.5;

  ${MEDIA_QUERY.max('mobile')} {
    font-size: ${14 / 16}rem;
  }
`;

const ResumeTagWrap = styled.div`
  margin: 0 0 1rem;
  > div {
    display: inline-block;
    border: 1px solid var(--color-white);
    border-radius: ${8 / 16}rem;
    padding: 0.5rem 1rem;
    font-family: 'Light';
    font-size: ${12 / 16}rem;
    margin-top: 1rem;
    &:not(div:last-child) {
      margin-right: 1rem;
    }
  }
`;

const ResumeLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  > a {
    font-size: ${16 / 16}rem;
    font-family: 'Light';
    &:not(a:first-child) {
      margin-top: 0.2rem;
    }
  }
`;
