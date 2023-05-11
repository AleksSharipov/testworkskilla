import React from 'react'

export const Button = ({ classNames, text, img, styles }) => {
  return (
    <button
      className={classNames}
      style={styles}
    ><span>{text}</span> {img}</button>
  )
}
