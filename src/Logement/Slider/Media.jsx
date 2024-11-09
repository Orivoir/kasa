import React from 'react'

import styles from "./Media.module.scss"
import ActionArrow from './ActionArrow'

export default function Media({
  url,
  title,
  showActions,
  onClick
}) {

  const [target, setTarget] = React.useState(url)

  const onFailMedia = () => {
    setTarget("https://placehold.co/600x415")
  }

  React.useEffect(() => {

    setTarget(url)

  }, [url])

  return (
    <div className={styles.MediaContainer}>
      <img
        height={415}
        onError={onFailMedia}
        className={styles.Media}
        alt={`picture of ${title}`}
        src={target} />

      {!!showActions && (
        <>
        <ActionArrow direction='left' onClick={onClick} />
        <ActionArrow direction='right' onClick={onClick} />
        </>
      )}
    </div>
  )
}