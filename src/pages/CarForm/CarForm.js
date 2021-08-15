import React, { useState, useEffect } from 'react'

import './CarForm.scss'
import { INITIAL_SLICE, CATEGORIES } from './CarFormConstants'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const ModelForm = ({ order, onChange, cars }) => {
  const [filteredCars, setFilteredCars] = useState(cars)
  const [startPage, setStartPage] = useState(1)
  const [category, setCategory] = useState(CATEGORIES[0])
  const [slice, setSlice] = useState(INITIAL_SLICE)

  useEffect(() => {
    if (order.carId) {
      const selectedCarIndex = cars.findIndex(({ id }) => id === order.carId.id)
      const page = Math.ceil((selectedCarIndex + 1) / INITIAL_SLICE)
      setStartPage(page)
      setSlice(page * INITIAL_SLICE)
    }
  }, [])

  const hangleCategoryClick = (category) => {
    let filtered =
      category === CATEGORIES[0]
        ? cars
        : cars.filter((car) => car.category === category)

    setCategory(category)
    setFilteredCars(filtered)
    setSlice(INITIAL_SLICE)
    setStartPage(1)
  }

  return (
    <form className="form">
      <section className="form__section">
        {CATEGORIES.map((item, index) => (
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
