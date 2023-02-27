import React, { memo } from 'react';
import styled from 'styled-components';

function Sidebar() {
  return <SidebarWrap></SidebarWrap>;
}

export default memo(Sidebar);

const SidebarWrap = styled.nav``;
