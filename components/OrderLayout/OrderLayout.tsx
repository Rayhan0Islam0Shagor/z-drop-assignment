import Image from 'next/image';
import * as TiIcons from 'react-icons/ti';
import OrderCard from '../OrderCard/OrderCard';
import styles from './OrderLayout.module.scss';

const OrderLayout = ({ order }) => {
  const {
    brand_name,
    Brand_img,
    fulfillBy,
    delivery_info,
    estimated_delivery_date,
    orders_offer,
    products,
  } = order;
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.logo}>
              {Brand_img && (
                <Image
                  loading="lazy"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  src={Brand_img}
                  alt="logo"
                  title={brand_name}
                />
              )}
            </div>
            <div className={styles.headlines}>
              <div className={styles.brand__name}>
                {brand_name && <p>{brand_name}</p>}
                <div className={styles.sign}>
                  <TiIcons.TiTick />
                </div>
              </div>
              <p className={styles.subHeading}>
                Fulfilled by {fulfillBy && fulfillBy}
              </p>
            </div>
          </div>
          <div className={styles.right}>
            {delivery_info && <h4>Delivery Fee: BDT. {delivery_info}</h4>}
            {estimated_delivery_date && (
              <p>Estimate Delivery on {estimated_delivery_date}</p>
            )}
          </div>
        </div>

        {products.map((product, index) => (
          <OrderCard key={index} product={product} />
        ))}

        {orders_offer && (
          <div className={styles.footer}>
            <p>{orders_offer}</p>
          </div>
        )}
      </div>

      <div className={styles.dottedLine}></div>
    </>
  );
};

export default OrderLayout;
