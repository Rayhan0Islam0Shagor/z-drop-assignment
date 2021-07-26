import Image from 'next/image';
import OrderLayout from '../OrderLayout/OrderLayout';
import styles from './Orders.module.scss';

const Orders = () => {
  return (
    <>
      <OrderLayout />
      <OrderLayout />
      <OrderLayout />
    </>
  );
};

export default Orders;
