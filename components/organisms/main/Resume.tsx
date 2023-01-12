import React, { memo } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { MdOpenInNew } from 'react-icons/md';
import { useSnapshot } from 'valtio';

import Anchor from '@atom/Anchor';
import Button from '@atom/Button';
import ParabolaShut from '@molecule/main/ParabolaShut';

import { H2 } from '@const/globalStyles';
import type { ProjectResume } from '@const/dummy/main/projects';

import { resetFocusMember } from '@store/main/focusMember';
import { removeProject, proxyProjects } from '@store/main/projects';

import { MEDIA_QUERY } from '@util/design.util';

function Resume({ title, desc, tags, links, color, target }: ProjectResume) {
  const router = useRouter();
  const { projects } = useSnapshot(proxyProjects);

  const onClose = () => {
    resetFocusMember();
    const idx = projects.findIndex((project) => project.resume && project.resume.target === target);
    if (idx !== -1) {
      removeProject(idx);
    }
  };

  const onAnimationRedirect = () => {
    const parabola = document.getElementById('parabola');
    if (parabola) {
      parabola.style.display = 'inline-block';
      parabola.style.opacity = '1';

      // 1000ms after
      setTimeout(() => {
        const parabolaRect = parabola.getBoundingClientRect() as DOMRect;
        parabola.style.transition =
          'top 0.2s ease-in-out, left 0.3s 0.2s ease-in-out, width 0.3s 0.2s ease-in-out, height 0.3s 0.2s ease-in-out, border-radius 0.3s ease-in-out, box-shadow 0.3s 0.2s ease-in-out';

        parabola.style.top = `${parabolaRect.top}px`;
        parabola.style.left = `${parabolaRect.left}px`;
        parabola.style.width = '28px';
        parabola.style.height = '28px';
        parabola.style.borderRadius = '50%';
        setTimeout(() => {
          parabola.style.position = 'fixed';
          parabola.style.top = '50%';
          parabola.style.left = '50%';
          parabola.style.boxShadow = 'none';
        }, 300);
        setTimeout(() => {}, 500);

        const data = {
          width: () => {
            const widthInterval = setInterval(() => {
              parabola.style.width = `${parseInt(parabola.style.width || '0', 10) + 100}px`;
              if (parseInt(parabola.style.width || '0', 10) >= window.outerWidth) {
                parabola.style.width = `${window.outerWidth}px`;
                parabola.style.borderRadius = '0';
                clearInterval(widthInterval);
              }
            }, 10);
          },
          height: () => {
            const heightInterval = setInterval(() => {
              parabola.style.height = `${parseInt(parabola.style.height || '0', 10) + 100}px`;
              if (parseInt(parabola.style.height || '0', 10) >= window.outerHeight) {
                parabola.style.height = `${window.outerHeight}px`;
                clearInterval(heightInterval);
              }
            }, 10);
          },
          top: () => {
            const topInterval = setInterval(() => {
              parabola.style.top = `${parseInt(parabola.style.top || '0', 10) - 1}%`;
              // console.log(parabola.style.top);
              if (parseInt(parabola.style.top || '0', 10) < 0) {
                parabola.style.top = '0px';
                clearInterval(topInterval);
              }
            }, 10);
          },
          left: () => {
            const leftInterval = setInterval(() => {
              parabola.style.left = `${parseInt(parabola.style.left || '0', 10) - 1}%`;
              // console.log(parabola.style.left);
              if (parseInt(parabola.style.left || '0', 10) < 0) {
                parabola.style.left = '0px';
                clearInterval(leftInterval);
              }
            }, 10);
          },
          redirect: () => {
            // eslint-disable-next-line no-constant-condition
            const redirectInterval = setInterval(() => {
              if (
                parseInt(parabola.style.width || '0', 10) >= window.outerWidth &&
                parseInt(parabola.style.height || '0', 10) >= window.outerHeight &&
                parseInt(parabola.style.top || '0', 10) <= 0 &&
                parseInt(parabola.style.left || '0', 10) <= 0
              ) {
                clearInterval(redirectInterval);
                setTimeout(() => {
                  router.push(`/${target}`);
                }, 500);
              }
            }, 10);
          },
        };
        setTimeout(() => {
          (Object.keys(data) as Array<keyof typeof data>).forEach((key) => {
            data[key]();
          });
        }, 1000);
      }, 300);
    }
  };

  return (
    <ResumeContainer bg={color} id='resume'>
      <ResumeWrap>
        <ResumeHeaderWrap>
          <Button onClick={onAnimationRedirect}>
            <ParabolaShut />
            <MdOpenInNew size={28} cursor='pointer' id='open-pp-icon' />
            <div>
              <span>좀 더 보러가기</span>
            </div>
          </Button>
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
  align-items: center;
  justify-content: space-between;

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(170rem / 16);
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;

    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: calc(19rem / 16);
      max-width: calc(92rem / 16);
      overflow-x: hidden;
      > span {
        position: absolute;
        top: 50%;
        left: -50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        width: 100%;
        transition: left 0.2s ease-in;
      }
    }

    &:hover {
      > div > span {
        left: 50%;
        transition: left 0.05s ease-out;
      }
    }
    &:focus {
      > div > span {
        left: -50%;
        transition: left 0.2s ease-in;
      }
    }
  }
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
