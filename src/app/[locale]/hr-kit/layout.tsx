import { ReactNode } from 'react';

import LocaleLayout from '@commons/LocaleLayout';

type TypeHrKitLayout = {
  children: ReactNode;
}

export default function HrKitLayout({ children }: TypeHrKitLayout) {
  return <LocaleLayout type='hr-kit'>{children}</LocaleLayout>;
}