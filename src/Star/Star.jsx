import React from 'react'

import IconStarFilled from "./../../images/icons/star.svg"
import IconStarEmpty from "./../../images/icons/star-empty.svg"

export default function Star({isFilled}) {

  return (
    <img
      src={isFilled ? IconStarFilled: IconStarEmpty}
      width={32}
      height={32}
      alt={`icon star ${isFilled ? "filled": "disabled"}`} />
  )
}