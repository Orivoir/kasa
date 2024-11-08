import React from 'react'

import styles from "./Content.module.scss"

export default function Content({isOpen, children}) {

  const ref = React.useRef(null)

  const onFetchRef = el => {
    if(!el) return;

    ref.current = el
    if(!isOpen) {
      ref.current.classList.add("hide")
    }
  }

  const onFinishTransition = event => {

    if(event.propertyName !== "opacity") return;

    if(event.target === ref.current) {

      const currentState = getComputedStyle(ref.current).opacity

      if(currentState == 0) {
        ref.current.classList.add("hide")
      } else {
        ref.current.classList.remove("hide")
      }
    }
  }

  React.useEffect(() => {
    addEventListener("transitionend", onFinishTransition)

    return () => {
      addEventListener("transitionend", onFinishTransition)
    }
  }, [])

  return (
    <div ref={onFetchRef} className={`${styles.AccordionContent} ${isOpen ? styles.Open: ""}`}>
      {children}
    </div>
  )
}