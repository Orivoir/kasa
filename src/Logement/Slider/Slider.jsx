import React from 'react'

import Media from "./Media"
import ActionArrow from "./ActionArrow"
import Counter from "./Counter"

import styles from "./Slider.module.scss"

export default function Slider({
  pictures,
  title = "Foobar & company"
}) {

  const isAlone = pictures.length === 1

  const [index, setIndex] = React.useState(0)

  const currentPicture = pictures[index]

  const onChangePicture = direction => {

    setIndex(currentIndex => {

      const nextIndex = currentIndex + (direction === "left" ? -1: 1)

      if(nextIndex < 0) {
        return pictures.length - 1
      } else if(nextIndex === pictures.length) {
        return 0
      }

      return nextIndex

    })
  }

  // preload gallery images
  React.useEffect(() => {

    if(isAlone) return;

    pictures.forEach(picture => {
      const preload = (new Image())
      preload.src = picture
    });
  }, [pictures])

  return (
    <section className={styles.Slider}>

      <Media
        onClick={onChangePicture}
        showActions={!isAlone}
        url={currentPicture}
        title={title} />

      {!isAlone && <Counter current={index + 1} total={pictures.length} />}
    </section>
  )
}