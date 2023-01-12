export const getResume = (target: 'kanu' | 'xeoye') => {
  const title = target === 'kanu' ? 'Haneum Park' : 'Seoye Kim';
  const desc =
    target === 'kanu'
      ? '이 세상에 개발자는 수 없이 많지만 그 중 군계일학이 될 수 있다고 생각합니다. 아무런 목표 없이 시작한 개발은 너무 좋아졌지만 때로는 실패할 수 있고 심지어는 주저 앉게 될 겁니다. 그러나 이제는 수 많은 역경을 딛고 일어나 또 다시 전진하는 1%의 범재가 되는게 목표가 됐습니다.'
      : '저는 좋은 디자인이 사용자의 삶을 달라지게 하고 나아가서는 세상을 바꿀 수 있다고 생각합니다. 저에게 스타트업 경험은 디자이너 영역에서 비즈니스 가능성을 생각하게 만드는 계기가 되었습니다. 언제나 눈으로는 확인할 수 없는 사용자 경험까지 세심하게 고민하고, 다양한 커리어 활동과 커뮤니티 모임을 좋아합니다.';
  const tags =
    target === 'kanu'
      ? ['React', 'Next.js', 'TypeScript', 'Ruby']
      : [
          'Figma',
          'Adobe XD',
          'Adobe Illustrator',
          'Adobe Photoshop',
          'Figma',
          'Rhino',
          'Adobe Premiere',
          'Keyshot',
        ];
  const links =
    target === 'kanu'
      ? [
          'https://github.com/haneum-park',
          'https://developak.tistory.com',
          'qkrgksdma17@gmail.com',
          'day.off.xyz@gmail.com',
        ]
      : ['chowercream@gmail.com', 'day.off.xyz@gmail.com'];
  return {
    target,
    color: target,
    title,
    desc,
    tags,
    links,
  };
};
