export const getResume = (target: 'kanu') => {
  const title = 'Haneum Park';
  const desc = '이 세상에 개발자는 수 없이 많지만 그 중 군계일학이 될 수 있다고 생각합니다. 아무런 목표 없이 시작한 개발은 너무 좋아졌지만 때로는 실패할 수 있고 심지어는 주저 앉게 될 겁니다. 그러나 이제는 수 많은 역경을 딛고 일어나 또 다시 전진하는 1%의 범재가 되는게 목표가 됐습니다.';
  const tags = ['React', 'Next.js', 'TypeScript', 'Ruby'];
  const links = [
    'https://github.com/haneum-park',
    'https://developak.tistory.com',
    'qkrgksdma17@gmail.com',
    'day.off.xyz@gmail.com',
  ];
  return {
    target,
    color: target,
    title,
    desc,
    tags,
    links,
  };
};
