import { FC } from 'react';
import styles from './SubNav.module.scss';

import { NavbarLinks } from '../../data/data';

const SubNav: FC = () => {
  return (
    <div className={styles.subNav}>
      {NavbarLinks.map((navLink, i) => {
        const { Icon, title } = navLink;

        return (
          <div className={styles.navItem} key={i}>
            <Icon color="#b5b5b5" />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SubNav;
