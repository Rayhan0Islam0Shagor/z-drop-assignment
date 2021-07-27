import OrderLayout from '../OrderLayout/OrderLayout';
import styles from './Orders.module.scss';

import { Order as OrderList } from '../../data/data';

const Orders = () => {
  console.log(OrderList);
  return (
    <>
      {OrderList.map((order, index) => {
        return <OrderLayout key={order.id} order={order} />;
      })}
    </>
  );
};

export default Orders;
