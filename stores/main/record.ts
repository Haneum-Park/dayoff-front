import { proxy } from 'valtio';

type ContentProps = {
  title: string;
  list: {
    desc: string;
    memo: string;
  }[];
};

type RecordProps = {
  educations: ContentProps;
  careers: ContentProps;
  contacts: ContentProps;
  career_desc: ContentProps;
  languages: ContentProps;
  skills: ContentProps;
  documents: ContentProps;
  licenseNawards: ContentProps;
  activities: ContentProps;
  etc: ContentProps;
};

export type ProxyRecord = {
  record: RecordProps;
};

export const proxyRecord = proxy<ProxyRecord>({
  record: {
    'educations': {
      'title': '학력',
      'list': [
        {
          'desc': '조선대학교, 컴퓨터 통계학과',
          'memo': '2013.03 ~ 2019.02 / 대한민국, 광주광역시 / 3.4(4.5)',
        },
        {
          'desc': '세종고등학교, 이과계열',
          'memo': '2010.03 ~ 2013.02 / 대한민국, 광주광역시',
        },
      ],
    },
    'careers': {
      'title': '경력',
      'list': [
        {
          'desc': '(주)카라멜라, 웹 프론트 총괄 및 프로젝트 리드',
          'memo': '2019.10 ~ 2023.03(3년 6개월) / 대한민국, 광주광역시 / 개발팀, 책임연구원, 과장',
        },
      ],
    },
    'contacts': {
      'title': '연락처',
      'list': [
        {
          'desc': '이메일',
          'memo': 'qkrgksdma17@gmail.com',
        },
        {
          'desc': '이메일',
          'memo': 'qksdbf15@naver.com',
        },
        {
          'desc': '이메일',
          'memo': 'qksdbf15@gmail.com',
        },
        {
          'desc': '개인번호',
          'memo': '010-2397-8172',
        },
      ],
    },
    'career_desc': {
      'title': '경력 기술서',
      'list': [],
    },
    'languages': {
      'title': '구사언어',
      'list': [
        {
          'desc': '한국어',
          'memo': '모국어',
        },
        {
          'desc': '영어',
          'memo': '기초(토익 650)',
        },
      ],
    },
    'skills': {
      'title': '보유 기술',
      'list': [
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
        {
          'desc': '',
          'memo': '',
        },
      ],
    },
    'documents': {
      'title': '포트폴리오/기타문서',
      'list': [
        {
          'desc': '웹 사이트 주소',
          'memo': 'https://day-off.xyz',
        },
        {
          'desc': '웹 사이트 주소',
          'memo': 'https://portfolio.day-off.xyz',
        },
        {
          'desc': '웹 사이트 주소',
          'memo': 'https://allreva.com',
        },
        {
          'desc': '웹 사이트 주소',
          'memo': 'https://github.com/hanuem-park',
        },
      ],
    },
    'licenseNawards': {
      'title': '자격증/수상내역',
      'list': [
        {
          'desc': '자격증 / 정보처리기사 / 최종합격',
          'memo': '2019.08 / 한국산업인력공단',
        },
        {
          'desc': '자격증 / 1종 보통 운전면허 / 최종합격',
          'memo': '2013.08 / 경찰청(운전면허시험관리단)',
        },
        {
          'desc': '수상내역 / 아이디어상',
          'memo': '2019.02 / (사)스마트미디어인재개발원',
        },
        {
          'desc': '수상내역 / 핵심 Web융합 프로젝트 최우수상',
          'memo': '2019.01 / (사)스마트미디어인재개발원',
        },
        {
          'desc': '수상내역 / BASE창의 인재양성 Festival 콘텐츠상',
          'memo': '2018.12 / 과학문화교육사업단',
        },
        {
          'desc': '수상내역 / 소트프웨어 경진대회 대상',
          'memo': '2019.06 / 조선대학교 자연과학대학',
        },
      ],
    },
    'activities': {
      'title': '활동',
      'list': [
        {
          'desc': '교육이수 / 빅데이터분석 전문가 과정 이수',
          'memo': '2018.09.03 ~ 2019.02.28 / (사)스마트미디어인재개발원',
        },
        {
          'desc': '아르바이트 / 한울공사',
          'memo': '2016.07 ~ 2016.08 / 대한민국, 광주광역시',
        },
      ],
    },
    'etc': {
      'title': '기타 사항',
      'list': [
        {
          'desc': '대한민국 군필 / 육군 병장 만기전역',
          'memo': '2014.10 ~ 2016.07 / 대한민국, 파주시 문산읍',
        },
      ],
    },
  },
});
