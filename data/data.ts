import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';

import { NavLinks } from '../types/types';

export const NavbarLinks: NavLinks[] = [
  {
    Icon: FaIcons.FaShoppingCart,
    title: 'checkout',
  },
  {
    Icon: GoIcons.GoLocation,
    title: 'shipping information',
  },
  {
    Icon: MdIcons.MdPayment,
    title: 'Payment',
  },
];
