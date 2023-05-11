import React, { memo } from 'react';

import styles from './sidebarItem.module.scss';

export const SidebarItem = memo(({ img, title, click, id, activEl }) => {
  return (
    <div
      className={activEl.key === id ? styles.itemActive : styles.item}
      onClick={click}
    >
      {img}
      <span>{title}</span>
      {activEl.key === id && <div className={styles.circle} />}
    </div>
  )
})
