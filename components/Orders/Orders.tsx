import OrderLayout from '../OrderLayout/OrderLayout';
import { Order as OrderList } from '../../data/data';

const Orders = () => {
  return (
    <>
      {OrderList.map((order) => {
        return <OrderLayout key={order.id} order={order} />;
      })}
    </>
  );
};

export default Orders;
