import React from 'react';

import { ReactComponent as Search } from '../../../assets/img/search.svg';
import { ReactComponent as ArrowDown } from '../../../assets/img/arrow_down.svg';

import styles from './filters.module.scss';

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <Search />
        <span>Поиск по звонкам</span>
      </div>
      <div className={styles.filterList}>
        <ul>
          <li>Все типы <ArrowDown /></li>
          <li>Все сотрудники <ArrowDown /></li>
          <li>Все звонки <ArrowDown /></li>
          <li>Все источники <ArrowDown /></li>
          <li>Все оценки <ArrowDown /></li>
          <li>Все ошибки <ArrowDown /></li>
        </ul>
      </div>
    </div>
  )
}
