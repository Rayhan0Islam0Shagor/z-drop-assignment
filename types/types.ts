import { IconType } from 'react-icons';

export interface NavLinks {
  Icon: IconType;
  title: String;
}

export interface Orders {
  id: string | number;
  brand_name: string;
  Brand_img: string;
  fulfillBy: string;
  delivery_info: number;
  estimated_delivery_date: string;
  orders_offer: string;
  products: Products[];
}

export interface Offers {
  id: string | number;
  Offer_desc: string;
  amountOfDiscount: number;
  code: string | number;
}

export interface Products {
  id: string | number;
  name: string;
  img: string;
  color: Color[];
  quantity: number;
  price: number;
  offer_price: number;
  offer: string | number;
  size: Size[];
}

export type Color =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'brown'
  | 'black';
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
