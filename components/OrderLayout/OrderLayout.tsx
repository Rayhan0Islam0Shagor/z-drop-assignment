import Image from 'next/image';
import * as TiIcons from 'react-icons/ti';
import styles from './OrderLayout.module.scss';

const OrderLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Image
                loading="lazy"
                height="100%"
                width="100%"
                objectFit="cover"
                src="/images/nike.jpg"
                alt="logo"
              />
            </div>
            <div className={styles.headlines}>
              <div className={styles.brand__name}>
                <p>Nike</p>
                <div className={styles.sign}>
                  <TiIcons.TiTick />
                </div>
              </div>
              <p className={styles.subHeading}>Fulfilled by Nike</p>
            </div>
          </div>
          <div className={styles.right}>
            <h4>Delivery Fee: BDT. 40</h4>
            <p>Estimate Delivery on 27 January</p>
          </div>
        </div>

        <h1>Hello</h1>

        <div className={styles.footer}>
          <p>
            Buy 3 item(s) more enjoy free shipping for Standard delivery option
          </p>
        </div>
      </div>

      <div className={styles.dottedLine}></div>
    </>
  );
};

export default OrderLayout;
