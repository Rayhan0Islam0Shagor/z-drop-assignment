import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Link href="/">
      <a className={styles.link}>
        <div className={styles.navbar}>
          <Image
            className={styles.logo}
            src="/images/zdrop-logo.svg"
            height="100%"
            width="100%"
            objectFit="contain"
          />
        </div>
      </a>
    </Link>
  );
};

export default Navbar;
