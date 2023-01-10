import React, { memo } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useSnapshot } from 'valtio';

import Anchor from '@atom/Anchor';

import type { ProjectResume } from '@const/dummy/main/projects';

import { resetFocusMember } from '@store/main/focusMember';
import { removeProject, proxyProjects } from '@store/main/projects';

import {
  ResumeWrap,
  ResumeHeaderWrap,
  ResumeBodyWrap,
  ResumeTitleWrap,
  ResumeDescWrap,
  ResumeTagWrap,
  ResumeLinkWrap,
} from './styles';

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
    <ResumeWrap bg={color}>
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
  );
}

export default memo(Resume);
