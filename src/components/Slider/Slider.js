import React, { useState, useEffect } from 'react'

import './Slider.scss'
import leftArrow from '../../assets/images/svg/left-arrow.svg'
import rightArrow from '../../assets/images/svg/right-arrow.svg'
import CirclePagination from './CirclePagination'
import Button from '../Button/Button'
import { sliderItems } from './SliderItems'

const Slider = () => {
  const [items, setItems] = useState([])
  const [curItem, setCurItem] = useState(0)

  const handleClick = (index) => {
    if (index >= 0 && index < items.length) {
      setCurItem(index)
    }
  }

  /* Preload images */
  useEffect(() => {
    const preloadItems = sliderItems.map((item) => {
      const image = new Image()
      image.src = item.image
      image.image = image
      return item
    })
    setItems(preloadItems)
  }, [])

  return (
    <div className="slider">
      <div className="slider__background">
        <img
          className="slider__image"
          alt="Need for drive"
          src={items.length ? items[curItem].image : null}
        />
        <div className="slider__overlay" />
      </div>

      <div className="slider__arrow" onClick={() => handleClick(curItem - 1)}>
        <img src={leftArrow} alt="arrow" />
      </div>

      <div className="slider__center">
        <div className="slider__text">
          <h2 className="slider__title">
            {items.length ? items[curItem].title : ''}
          </h2>
          <p className="slider__subtitle">
            {items.length ? items[curItem].subtitle : ''}
          </p>
          <Button
            className="slider__button"
            value="Подробнее"
            color={items.length ? items[curItem].color : ''}
          />
        </div>
        <CirclePagination count={items.length} curIndex={curItem} />
      </div>

      <div className="slider__arrow" onClick={() => handleClick(curItem + 1)}>
        <img src={rightArrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Slider
