import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';

import { NavLinks, Orders } from '../types/types';

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

export const Order: Orders[] = [
  {
    id: 1,
    brand_name: 'Nike',
    Brand_img: '/images/nike.jpg',
    fulfillBy: 'Nike',
    delivery_info: 50,
    estimated_delivery_date: '27 January',
    orders_offer:
      'Buy 3 item(s) more enjoy free shipping for Standard delivery option',
    products: [
      {
        id: 1,
        name: 'shoe',
        img: '/images/product_1.png',
        color: ['red'],
        quantity: 1,
        price: 2850,
        offer_price: 3050,
        offer: 25,
        size: ['xl'],
      },
      {
        id: 2,
        name: 'shoe',
        img: '/images/product_2.png',
        color: ['red'],
        quantity: 1,
        price: 2850,
        offer_price: 3050,
        offer: 25,
        size: ['xl'],
      },
    ],
  },

  {
    id: 2,
    brand_name: 'Z-Drop',
    Brand_img: '/images/z_drop.png',
    fulfillBy: 'Z-Drop',
    delivery_info: 60,
    estimated_delivery_date: '2018-10-10',
    orders_offer: '',
    products: [
      {
        id: 1,
        name: 'shoe',
        img: '/images/product_3.png',
        color: ['red'],
        quantity: 2,
        price: 2850,
        offer_price: 3050,
        offer: '',
        size: ['xl'],
      },
    ],
  },
];
