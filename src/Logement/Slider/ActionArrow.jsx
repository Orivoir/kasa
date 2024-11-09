import React from 'react'

import IconArrowDown from "./../../../images/icons/arrow_down.svg"
import styles from "./ActionArrow.module.scss"

export default function ActionArrow({
  onClick,
  direction = "left",
}) {

  return (
    <button
      type="button"
      onClick={() => onClick(direction)}
      className={`${styles.ActionArrow} ${direction === "left" ? styles.Left: styles.Right}`}>
      <img
        width={96}
        src={IconArrowDown}
        alt={`slide to ${direction === "left" ? "previous": "next"}`} />
    </button>
  )
}