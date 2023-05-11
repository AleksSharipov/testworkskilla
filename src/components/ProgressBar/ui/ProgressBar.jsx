import React from 'react';
import { ProgressItem } from '../../ProgressItem/ProgressItem';

import styles from './progressBar.module.scss';

export const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <ProgressItem
        title={'Новые звонки'}
        descr={'20 из 30 шт'}
        // value={}
        color={'rgba(0, 167, 117, 1)'}
      />
      <ProgressItem
        title={'Качество разговоров'}
        descr={'40%'}
        // value={}
        color={'rgba(255, 184, 0, 1)'}
      />
      <ProgressItem
        title={'Конверсия в заказ'}
        descr={'67%'}
        // value={}
        color={'rgba(234, 26, 79, 1)'}
      />
    </div>
  )
}
