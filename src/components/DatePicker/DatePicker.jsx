import React from 'react';

import { ReactComponent as Left } from '../../assets/img/left.svg';
import { ReactComponent as Right } from '../../assets/img/right.svg';
import { ReactComponent as Calendar } from '../../assets/img/calendar.svg';

import styles from './datePicker.module.scss';

export const DatePicker = () => {
  return (
    <div className={styles.date}>
      <Left />
      <div className={styles.calendar}>
        <Calendar  />
        <span>3 дня</span>
      </div>
      <Right />
    </div>
  )
}
