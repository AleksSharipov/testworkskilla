import React from 'react';

import { ReactComponent as Plus } from '../../assets/img/plus.svg';


import styles from './balance.module.scss';

export const Balance = () => {
  return (
    <div className={styles.balance}>
      <p>Баланс: <span>272 ₽</span> </p>
      <Plus
        fill='rgba(0, 95, 248, 1)'
      />
    </div>
  )
}
