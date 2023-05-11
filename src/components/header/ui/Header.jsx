import React from 'react';
import { ProgressBar } from '../../ProgressBar';

import { ReactComponent as Search } from '../../../assets/img/search.svg';
import { ReactComponent as ArrowDown } from '../../../assets/img/arrow_down.svg';
import avatar from '../../../assets/img/avatar.png';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.date}>
          <p>Среда, 13 окт</p>
        </div>
        <ProgressBar />
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.profile}>
            <div className={styles.profileName}>
              <span>ИП Сидорова Александра Михайловна</span>
              <ArrowDown fill="#ADBFDF" />
            </div>
            <div className={styles.profileAvatar}>
              <img
                alt='user avatar'
                src={avatar}
              />
              <ArrowDown fill="#ADBFDF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
