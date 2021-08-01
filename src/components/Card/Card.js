import React from 'react'
import cn from 'classnames'

import './Card.scss'

const Card = ({ title, subtitle, img, selected }) => {
  const classes = cn('card', { card_selected: selected })
  return (
    <section className={classes}>
      <h2 className="card__title">{title}</h2>
      <p className="card__subtitle">{subtitle}</p>
      <img className="card__img" src={img} alt="card-img" />
    </section>
  )
}

export { Card }
