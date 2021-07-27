import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';

import { NavLinks, Orders, Offers } from '../types/types';

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

export const Vouchers: Offers[] = [
  {
    id: 1,
    Offer_desc: 'get upto 25% offer for 3000',
    amountOfDiscount: 25,
    code: 'VOUCHER_1',
  },
  {
    id: 2,
    Offer_desc: 'get upto 50% offer for 50000',
    amountOfDiscount: 50,
    code: 'VOUCHER_2',
  },
  {
    id: 3,
    Offer_desc: 'get upto 10% offer for 1000',
    amountOfDiscount: 10,
    code: 'VOUCHER_3',
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
        name: 'Men Striped Casual Spread Shirt Super Skinny Fit Low',
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
        name: 'Men Striped Casual Spread Shirt Super Skinny Fit Low',
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
        name: 'Men Striped Casual Spread Shirt Super Skinny Fit Low',
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
