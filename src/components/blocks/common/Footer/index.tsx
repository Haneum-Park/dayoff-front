'use client';

// import footer from '@consts/footer';

import { CopyrightWrap, FooterWrap } from './styled';

function Footer() {
  return (
    <FooterWrap>
      {/* <FooterInfoWrap>
        {footer.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </FooterInfoWrap> */}
      <CopyrightWrap className='focus'>Created by. Haneum Park</CopyrightWrap>
    </FooterWrap>
  );
}

export default Footer;
