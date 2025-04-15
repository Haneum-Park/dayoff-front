import { atom } from 'jotai';

export type TypeProfileDesc = {
  text?: string;
  focus?: string;
}

export type TypeProfileInfo = {
  name: string;
  address: string;
  job: string;
  dob: string;
}

export type TypeAtomProfile = {
  info: TypeProfileInfo;
  desc: TypeProfileDesc[];
}

export const atomProfile = atom<TypeAtomProfile>({
  info: {
    name: "박 한음",
    address: "대한민국 광주광역시. qkrgksdma17@gmail.com",
    job: "웹 풀 스택 엔지니어",
    dob: "생년월일 : 1994. 09. 29"
  },
  desc: [
    { text: "안녕하세요, " },
    { focus: "박한음" },
    { text: "입니다. 한국에서 " },
    { focus: "웹 풀 스택 개발자" },
    { text: "로 활동하고 있으며, " },
    { focus: "6년 차" },
    { text: "입니다. 주로 " },
    { focus: "NodeJS를 기반으로 개발하며 메인 언어는 Typescript" },
    {
      text: "입니다. 항상 새로운 영역을 개발하고, 기본을 충실하는 것을 선호합니다. 저에 관한 이력은 아래에 자세히 확인하실 수 있습니다!"
    }
  ]
});