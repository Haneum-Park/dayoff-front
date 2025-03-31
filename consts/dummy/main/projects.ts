import type { StaticImageData } from 'next/image';

import SampleIMG1 from '@image/sample/1.jpg';
import SampleIMG2 from '@image/sample/2.jpg';
import SampleIMG3 from '@image/sample/3.jpg';
import SampleIMG4 from '@image/sample/4.jpg';
import SampleIMG5 from '@image/sample/5.gif';

export interface ProjectResume {
  title: string;
  desc: string;
  tags: string[];
  links: string[];
  color: string;
  target: 'kanu';
}
export interface ProjectCard {
  index: number;
  title: string;
  desc: string;
  platform: string[];
  specs: string[];
}

export interface Project {
  img?: {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
  card?: ProjectCard;
  resume?: ProjectResume;
}

const projects: Project[] = [
  {
    img: {
      src: SampleIMG5,
      alt: 'sample 5',
      width: 760,
      height: 760,
    },
    card: {
      index: 1,
      title: '프로젝트 1',
      desc: 'dsdsakulbdluasbdlaskbdlkuasdbalkusbdlkuasbdlkua',
      platform: ['web', 'app'],
      specs: ['Ai', 'Ps', 'Ae', 'Xd', 'Zepline', 'Figma'],
    },
  },
  {
    img: {
      src: SampleIMG1,
      alt: 'sample 1',
      width: 760,
      height: 760,
    },
    card: {
      index: 2,
      title: '프로젝트 2',
      desc: 'dsdsakulbdluasbdlaskbdlkuasdbalkusbdlkuasbdlkua',
      platform: ['web', 'app'],
      specs: ['Ai', 'Ps', 'Ae', 'Xd', 'Zepline', 'Figma'],
    },
  },
  {
    img: {
      src: SampleIMG2,
      alt: 'sample 2',
      width: 760,
      height: 760,
    },
    card: {
      index: 3,
      title: '프로젝트 3',
      desc: 'dsdsakulbdluasbdlaskbdlkuasdbalkusbdlkuasbdlkua',
      platform: ['web', 'app'],
      specs: ['Ai', 'Ps', 'Ae', 'Xd', 'Zepline', 'Figma'],
    },
  },
  {
    img: {
      src: SampleIMG3,
      alt: 'sample 3',
      width: 760,
      height: 760,
    },
    card: {
      index: 4,
      title: '프로젝트 4',
      desc: 'dsdsakulbdluasbdlaskbdlkuasdbalkusbdlkuasbdlkua',
      platform: ['web', 'app'],
      specs: ['Ai', 'Ps', 'Ae', 'Xd', 'Zepline', 'Figma'],
    },
  },
  {
    img: {
      src: SampleIMG4,
      alt: 'sample 5',
      width: 760,
      height: 760,
    },
    card: {
      index: 5,
      title: '프로젝트 5',
      desc: 'dsdsakulbdluasbdlaskbdlkuasdbalkusbdlkuasbdlkua',
      platform: ['web', 'app'],
      specs: ['Ai', 'Ps', 'Ae', 'Xd', 'Zepline', 'Figma'],
    },
  },
];

export default projects;
