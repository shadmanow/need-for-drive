import React, { useRef, useEffect } from 'react'
import cn from 'classnames'

import './Dropdown.scss'

const Dropdown = ({ isOpen, items, scrollTo, onClick }) => {
  const itemsRef = useRef([])

  const classes = cn('dropdown', {
    dropdown_opened: isOpen,
  })

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [items])

  useEffect(() => {
    if (itemsRef.current && itemsRef.current.length) {
      itemsRef.current[scrollTo].scrollIntoView()
    }
  }, [scrollTo])

  return (
    <ul className={classes}>
      {items.map((item, i) => (
        <li
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          className="dropdown__item"
          onClick={() => onClick(i)}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export { Dropdown }
