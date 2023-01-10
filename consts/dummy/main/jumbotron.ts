import type { ImageProps } from 'next/image';

import type { GroupBtnProps } from '@molecule/common/GroupBtn';

import JumbotronLogo from '@image/logo/main/jumbotron-text-logo.png';

export interface JumbotronProps {
  img: ImageProps;
  groupBtn: GroupBtnProps;
  desc: string;
}

const jumbotron: JumbotronProps = {
  img: {
    src: JumbotronLogo,
    alt: 'Jumbotron Logo',
    width: 700,
    height: 216.69,
  },
  groupBtn: {
    maxWidth: 'calc(180rem / 16)',
    btns: [
      {
        children: 'dev.haneum.park',
      },
      {
        children: 'uxui.seoye.kim',
      },
    ],
  },
  desc: '안녕하세요. 우리는 데이오프 입니다. 우리는 같은 직장에서 만났고, 지금은 서로의 다른 목적을 위해 즐거운 웹 프로젝트를 제작하고 있습니다. 데이오프에서 저희의 멋진 프로젝트들을 볼 수 있습니다. 우리의 포트폴리오를 즐겨주세요.',
};

export default jumbotron;
