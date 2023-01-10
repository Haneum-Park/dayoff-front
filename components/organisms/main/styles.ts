import styled from 'styled-components';

export const JumbotronWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: calc(64rem / 16) 0 calc(32rem / 16);
  height: 100%;
`;

export const JumbotronImgWrap = styled.div``;

export const JumbotronDescWrap = styled.div``;

export const JumbotronPg = styled.h5`
  width: 100%;
  max-width: calc(608rem / 16);
  margin-top: calc(24rem / 16);
`;

export const ProjectRollerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  /* -ms-overflow-style: none; IE and Edge */
  /* scrollbar-width: none; Firefox */
  /* &::-webkit-scrollbar { */
  /* display: none; Chrome, Safari, Opera */
  /* } */
`;

export const ProjectWrap = styled.div`
  position: relative;
  width: calc(760rem / 16);
  height: calc(760rem / 16);
  margin: calc(24rem / 16) 0;
  &:first-child {
    margin-top: calc(64rem / 16);
  }
  &:last-child {
    margin-bottom: calc(64rem / 16);
  }
  &,
  & > img {
    border-radius: calc(16rem / 16);
  }
`;

export const ProjectCardWrap = styled.div`
  position: absolute;
  top: 83%;
  left: 50%;
  width: 100%;
  height: calc(224rem / 16);
  border-radius: calc(16rem / 16);
  transform: translate(-50%, -50%);
  padding: 0 calc(16rem / 16);
  /* overflow: hidden; */
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: top;
  width: 100%;
  height: calc(224rem / 16);
  border-radius: calc(16rem / 16);
  background-color: var(--color-black-9);
  padding: calc(16rem / 16);
  overflow: hidden;
  backdrop-filter: blur(5px);
  * {
    color: var(--color-white);
  }
`;

export const ProjectIndex = styled.div`
  margin-top: calc(2rem / 16);
  margin-right: calc(16rem / 16);
`;

export const ProjectCardUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  li:last-child {
    margin-left: auto;
  }
`;

export const ProjectCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: calc(8rem / 16);
  h5 {
    margin: 0;
  }
`;

export const ProjectCardDesc = styled.div`
  width: 100%;
  max-width: calc(544rem / 16);
  overflow: hidden;
  word-wrap: break-word;
`;

export const ResumeWrap = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: ${760 / 16}rem;
  height: ${760 / 16}rem;
  background-color: var(--color-${({ bg }) => bg});
  border-radius: ${16 / 16}rem;
  padding: 2rem;
  * {
    color: var(--color-white);
  }
`;

export const ResumeHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ResumeBodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${500 / 16}rem;
  padding-top: 5rem;
`;

export const ResumeTitleWrap = styled.h2`
  font-family: 'Light';
  span {
    font-size: ${28 / 16}rem;
    font-family: 'SemiBold';
  }
`;

export const ResumeDescWrap = styled.div`
  font-family: 'Light';
  font-size: ${18 / 16}rem;
  line-height: 1.5;
`;

export const ResumeTagWrap = styled.div`
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

export const ResumeLinkWrap = styled.div`
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
