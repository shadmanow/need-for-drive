import React, { useState, useEffect } from 'react'

import './CarForm.scss'
import { INITIAL_SLICE, DEFAULT_CATEGORY } from './CarFormConstants'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const ModelForm = ({ order, onChange, cars, categories }) => {
  const categoryArr = [DEFAULT_CATEGORY, ...categories]
  const [filteredCars, setFilteredCars] = useState(cars)
  const [startPage, setStartPage] = useState(1)
  const [category, setCategory] = useState(DEFAULT_CATEGORY)
  const [slice, setSlice] = useState(INITIAL_SLICE)

  useEffect(() => {
    if (order.carId) {
      const selectedCarIndex = cars.findIndex(({ id }) => id === order.carId.id)
      let page = Math.ceil((selectedCarIndex + 1) / INITIAL_SLICE)
      if (page === 0) page++
      setStartPage(page)
      setSlice(page * INITIAL_SLICE)
    }
  }, [])

  const hangleCategoryClick = (category) => {
    let filtered =
      category === DEFAULT_CATEGORY
        ? cars
        : cars.filter((car) => car.category === category)

    setStartPage(1)
    setCategory(category)
    setFilteredCars(filtered)
    setSlice(INITIAL_SLICE)
  }

  return (
    <form className="form">
      <section className="form__section">
        {categoryArr.map((item, index) => (
          <Radio
            key={`${item}-${index}`}
            label={item}
            value={item}
            checked={category === item}
            onClick={hangleCategoryClick}
          />
        ))}
      </section>
      <section className="form__cards-wrapper">
        {filteredCars.slice(slice - INITIAL_SLICE, slice).map((car) => (
          <Card
            key={car.id}
            title={car.name}
            subtitle={`${car.priceMin} - ${car.priceMax} ₽`}
            img={car.imgPath}
            imgAlt={car.name}
            selected={order.carId && order.carId.id === car.id}
            onClick={() => onChange({ carId: car })}
          />
        ))}
      </section>
      <ButtonPagination
        startPage={startPage}
        countPages={Math.ceil(filteredCars.length / INITIAL_SLICE)}
        onClick={(page) => setSlice(page * INITIAL_SLICE)}
      />
    </form>
  )
}

export default ModelForm
