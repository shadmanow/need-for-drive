import React from 'react';

import {Footer} from "../../components/Footer/Footer";
import {Button} from "../../components/Button/Button";
import {Slider} from "../../components/Slider/Slider";
import './MainPage.scss';
import {Header} from "../../components/Header/Header";
import {Sidebar} from "../../components/Sidebar/Sidebar";


const MainPage = () => {
  return (
    <div className='main-page'>
      <Sidebar />
      <main className='main-page__content'>
        <article className='main-page__left'>
          <Header/>
          <section className='main-page__hero'>
            <h1 className='main-page__title'>
              <span className='main-page__title main-page__title_black'>Каршеринг</span>
              <br/>
              <span className='main-page__title main-page__title_green'>Need for drive</span>
            </h1>
            <p className='main-page__subtitle'>
              Поминутная аренда авто твоего города
            </p>
            <Button
              className='main-page__button'
              value='Забронировать'
            />
          </section>
          <Footer/>
        </article>

        <section className='main-page__right'>
          <Slider/>
        </section>
      </main>
    </div>
  )
};

export {MainPage}