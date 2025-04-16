import React from 'react';
import LayoutContent from '@commons/LayoutContent';

export default async function ManageLayout({ children }: { children: React.ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>;
}