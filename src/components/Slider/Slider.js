import React from 'react';

import './Slider.scss'
import leftArrow from '../../assets/images/svg/left-arrow.svg';
import rightArrow from '../../assets/images/svg/right-arrow.svg';
import {Pagination} from "./Pagination";
import {Button} from "../Button/Button";
import sliderImage from '../../assets/images/slider-card1.jpg';

const Slider = () => {
  return (
    <div className='slider'>

      <div className='slider__background'>
        <img
          className='slider__image'
          alt='Need for drive'
          src={sliderImage}
        />
        <div className='slider__overlay'/>
      </div>

      <div className='slider__arrow'>
        <img src={leftArrow} alt=''/>
      </div>

      <div className='slider__center'>
        <div className='slider__text'>
          <h1 className='slider__title'>Бесплатная парковка</h1>
          <p className='slider__subtitle'>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
          <Button
            className='slider__button'
            value='Подробнее'
            color='green'
          />
        </div>
        <Pagination
          count={4}
          curIndex={0}
        />
      </div>

      <div className='slider__arrow'>
        <img src={rightArrow} alt=''/>
      </div>

    </div>
  )
};

export {Slider}