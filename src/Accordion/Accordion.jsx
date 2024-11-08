import React from 'react'

import Header from './atomes/Header'
import Content from './atomes/Content'

export default function Accordion({
  title,
  isDefaultOpen = false,
  children
}) {

  const [isOpen, setIsOpen] = React.useState(isDefaultOpen)

  const onToggleOpen = () => {
    setIsOpen(currentValue => !currentValue)
  }

  return (
    <section>
      <Header title={title} isOpen={isOpen} onToggle={onToggleOpen} />

      <Content isOpen={isOpen}>{children}</Content>
    </section>
  )
}