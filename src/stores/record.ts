import { atom } from 'jotai';

export type TypeRecordList = {
  [key: string]: {
    desc: string;
    memo: string;
    extra?: Record<string, string>;
    path?: string;
    route?: string;
    masking?: 'true' | 'false';
  }
}

export type TypeRecordItem = {
  title: string;
  list: TypeRecordList;
}

export type TypeAtomRecord = {
  educations: TypeRecordItem;
  careers: TypeRecordItem;
  contacts: TypeRecordItem;
  project_desc: TypeRecordItem;
  career_desc: TypeRecordItem;
  languages: TypeRecordItem;
  skills: TypeRecordItem;
  documents: TypeRecordItem;
  licenseNawards: TypeRecordItem;
  activities: TypeRecordItem;
  etc: TypeRecordItem;
}

export const atomRecord = atom<TypeAtomRecord>({
  educations: {
    title: "학력",
    list: {
      "0": {
        desc: "조선대학교, 컴퓨터 통계학과",
        memo: "2013.03 ~ 2019.02 / 대한민국, 광주광역시 / 3.4(4.5)",
      },
      "1": {
        desc: "세종고등학교, 이과계열",
        memo: "2010.03 ~ 2013.02 / 대한민국, 광주광역시",
      },
    },
  },
  careers: {
    title: "경력",
    list: {
      "0": {
        desc: "(주)카라멜라, 웹 프론트 총괄 및 프로젝트 리드",
        memo: "2019.10 ~ 2023.03(3년 6개월) / 대한민국, 광주광역시 / 개발팀, 책임연구원, 과장",
      },
    },
  },
  contacts: {
    title: "연락처",
    list: {
      "0": {
        desc: "이메일",
        memo: "qkrgksdma17@gmail.com",
      },
      "1": {
        desc: "이메일",
        memo: "qksdbf15@naver.com",
      },
      "2": {
        desc: "개인번호",
        memo: "010-2397-8172",
        masking: "true",
      },
    },
  },
  project_desc: {
    title: "프로젝트 이력",
    list: {
      "0": {
        desc: "프로젝트명 : 디지털 성범죄 검출 솔루션(METU)",
        memo: "기간 : 2019.10 ~ 2020.01(4개월)",
        extra: {
          "0": "개발 상세 내용 또는 참여 내용",
          "1": "- 프로토 타입 버전 Front-End 개발",
          "2": "- Languages : Javascript",
          "3": "- Frameworks : React.js, Express.js",
        },
        path: "/project/metu",
      },
    },
  },
  career_desc: {
    title: "경력 기술서",
    list: {},
  },
  languages: {
    title: "구사언어",
    list: {
      "0": {
        desc: "한국어",
        memo: "모국어",
      },
      "1": {
        desc: "영어",
        memo: "기초(토익 650)",
      },
    },
  },
  skills: {
    title: "보유 기술",
    list: {},
  },
  documents: {
    title: "포트폴리오/기타문서",
    list: {
      "0": {
        desc: "데이오프",
        memo: "https://day-off.xyz",
        route: "https://day-off.xyz",
      },
      "1": {
        desc: "Github 주소",
        memo: "https://github.com/haneum-park",
        route: "https://github.com/haneum-park",
      },
    },
  },
  licenseNawards: {
    title: "자격증/수상내역",
    list: {
      "0": {
        desc: "자격증 / 정보처리기사 / 최종합격",
        memo: "2019.08 / 한국산업인력공단",
      },
      "1": {
        desc: "자격증 / 1종 보통 운전면허 / 최종합격",
        memo: "2013.08 / 경찰청(운전면허시험관리단)",
      },
      "2": {
        desc: "수상내역 / 아이디어상",
        memo: "2019.02 / (사)스마트미디어인재개발원",
      },
      "3": {
        desc: "수상내역 / 핵심 Web융합 프로젝트 최우수상",
        memo: "2019.01 / (사)스마트미디어인재개발원",
      },
      "4": {
        desc: "수상내역 / BASE창의 인재양성 Festival 콘텐츠상",
        memo: "2018.12 / 과학문화교육사업단",
      },
      "5": {
        desc: "수상내역 / 소트프웨어 경진대회 대상",
        memo: "2019.06 / 조선대학교 자연과학대학",
      },
    },
  },
  activities: {
    title: "활동",
    list: {
      "0": {
        desc: "교육이수 / 빅데이터분석 전문가 과정 이수",
        memo: "2018.09.03 ~ 2019.02.28 / (사)스마트미디어인재개발원",
      },
      "1": {
        desc: "아르바이트 / 한울공사",
        memo: "2016.07 ~ 2016.08 / 대한민국, 광주광역시",
      },
    },
  },
  etc: {
    title: "기타 사항",
    list: {
      "0": {
        desc: "대한민국 군필 / 육군 병장 만기전역",
        memo: "2014.10 ~ 2016.07 / 대한민국, 파주시 문산읍",
      },
    },
  },
});