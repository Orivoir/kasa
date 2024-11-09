import React from 'react'

import styles from "./Avatar.module.scss"

export default function Avatar({
  url,
  size = 64,
  name = "John Doe"
}) {

  const [target, setTarget] = React.useState(url)

  // Reply with static image text based on owner letter name
  const onFailLoadAvatar = () => {

    const [firstName, lastName] = name.split(" ")
    const initialName = firstName.charAt(0) + lastName.charAt(0)

    setTarget(`https://placehold.co/${size}x${size}?text=${initialName}`)
  }


  return (
    <img
      onError={onFailLoadAvatar}
      className={styles.Avatar}
      alt={`Profil picture of ${name}`}
      src={target}
      width={size}
      height={size} />
  )
}