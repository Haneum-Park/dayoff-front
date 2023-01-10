export const getResume = (target: 'kanu' | 'xeoye') => {
  const title = target === 'kanu' ? 'Haneum Park' : 'Seoye Kim';
  const desc =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing';
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
