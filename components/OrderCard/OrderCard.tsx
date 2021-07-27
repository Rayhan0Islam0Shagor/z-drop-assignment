import { useState } from 'react';
import Image from 'next/image';
import * as RiIcons from 'react-icons/ri';
import styles from './OrderCard.module.scss';

const OrderCard = ({ product }) => {
  const [selected, setSelected] = useState(false);

  const { name, img, color, quantity, price, old_price, offer, size } = product;

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className={styles.order__cart}>
      <div className={styles.image__box}>
        <Image
          src={img}
          height="130px"
          width="100%"
          objectFit="contain"
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.descriptions}>
          {name && <p>{name}</p>}

          <div className={styles.item__desc}>
            {color && <p>Color: {color}</p>}
            {size && <p>Size: {size}</p>}
          </div>

          {quantity && <p>Quantity: {quantity}</p>}

          <div className={styles.price__section}>
            <p>Price: </p>
            <span>BDT. {price}</span>
            {old_price && (
              <span className={styles.old_price}>BDT. {old_price}</span>
            )}
            {offer && <span className={styles.offer}>{offer}% off</span>}
          </div>
        </div>

        <div className={styles.icons}>
          <RiIcons.RiHeart2Line
            color={selected ? 'red' : '#CECECE'}
            className={styles.wishlist__icon}
            onClick={handleClick}
          />
          <RiIcons.RiDeleteBinLine color="#FF6F00" />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
