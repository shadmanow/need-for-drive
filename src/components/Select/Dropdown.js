import React, { useRef, useEffect } from 'react'
import cn from 'classnames'

import './Dropdown.scss'

const Dropdown = ({ isOpen, items, scrollTo, onSelect }) => {
  const itemsRef = useRef([])
  const containerRef = useRef()

  const classes = cn('dropdown', {
    dropdown_opened: isOpen,
  })

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [items])

  useEffect(() => {
    if (itemsRef.current && itemsRef.current.length && containerRef.current) {
      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const itemRect = itemsRef.current[scrollTo].getBoundingClientRect()

      const scroll = Math.abs(itemRect.top - containerRect.top)

      if (itemRect.top > containerRect.top) {
        container.scrollTop += scroll
      } else {
        container.scrollTop -= scroll
      }
    }
  }, [scrollTo])

  return (
    <ul className={classes} ref={containerRef}>
      {items.map((item, i) => (
        <li
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          className="dropdown__item"
          onClick={() => onSelect(i)}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
