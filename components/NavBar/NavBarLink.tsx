import { useCallback } from 'react';
import { useRouter } from 'next/router'

import { IProps } from './types';

export const NavBarLink = ({ href, name }: IProps) => {
  const { asPath } = useRouter();
  const isCurrentPath = asPath === href;
  return (
    <a
      href={href}
      className={`block py-2 pr-4 pl-3 text-gray-900 hover:font-bold font-montserrat uppercase ${isCurrentPath ? 'font-bold ' : ''}`}
    >
      {name}
    </a>
  );
};