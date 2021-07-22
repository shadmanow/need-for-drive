import React, {useState, useEffect} from 'react';

import './Slider.scss'
import {sliderItems} from "./SliderItems";
import leftArrow from '../../assets/images/svg/left-arrow.svg';
import rightArrow from '../../assets/images/svg/right-arrow.svg';
import {Pagination} from "./Pagination";
import {Button} from "../Button/Button";

const Slider = () => {
  const [items, setItems] = useState(sliderItems);
  const [curItem, setCurItem] = useState(0);

  const handleClick = (index) => {
    if (index >= 0 && index < sliderItems.length) {
      setCurItem(index);
    }
  };

  /* Preload images */
  useEffect(() => {
    const preloadItems = items.map(item => {
      const image = new Image();
      image.src = item.image;
      image.image = image;
      return item;
    });
    setItems(preloadItems);
  }, []);

  return (
    <div className='slider'>

      <div className='slider__background'>
        <img
          className='slider__image'
          alt='Need for drive'
          src={items ? items[curItem].image : sliderItems[curItem].image}
        />
        <div className='slider__overlay'/>
      </div>

      <div
        className='slider__arrow'
        onClick={() => handleClick(curItem - 1)}
      >
        <img src={leftArrow} alt=''/>
      </div>

      <div className='slider__center'>
        <div className='slider__text'>
          <h1 className='slider__title'>{sliderItems[curItem].title}</h1>
          <p className='slider__subtitle'>{sliderItems[curItem].subtitle}</p>
          <Button
            className='slider__button'
            value='Подробнее'
            color={sliderItems[curItem].color}
          />
        </div>
        <Pagination
          count={sliderItems.length}
          curIndex={curItem}
        />
      </div>

      <div
        className='slider__arrow'
        onClick={() => handleClick(curItem + 1)}
      >
        <img src={rightArrow} alt=''/>
      </div>

    </div>
  )
};

export {Slider}