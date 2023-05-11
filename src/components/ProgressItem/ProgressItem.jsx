import React from 'react';

import styles from './progressItem.module.scss';

export const ProgressItem = ({ title, value, descr, color }) => {
  return (
    <div className={styles.progressItem}>
      <p>{title} <span style={{ color }}>{descr}</span></p>
      <div className={styles.progress}>
        <div
          className={styles.progressColor}
          style={{
            backgroundColor: color,
            // вычисляемые значения - value
            width: '60%'
          }}
        />
      </div>
    </div>
  )
}
