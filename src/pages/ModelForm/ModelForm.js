import React, { useState } from 'react'

import './ModelForm.scss'
import { INITIAL_SLICE, CATEGORIES } from './ModelFormConstants'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const ModelForm = ({ carId, onChange, cars }) => {
  const [filteredModels, setFilteredModels] = useState(cars)
  const [category, setCategory] = useState(CATEGORIES[0])
  const [slice, setSlice] = useState(INITIAL_SLICE)

  const onCategorySelect = (category) => {
    let filtered = []
    if (category === CATEGORIES[0]) {
      filtered = cars
    } else {
      filtered = cars.filter((car) => car.category === category)
    }
    setSlice(INITIAL_SLICE)
    setCategory(category)
    setFilteredModels(filtered)
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
            onClick={onCategorySelect}
          />
        ))}
      </section>
      <section className="form__cards-wrapper">
        {filteredModels.slice(slice - INITIAL_SLICE, slice).map((car) => (
          <Card
            key={car.id}
            title={car.name}
            subtitle={`${car.priceMin} - ${car.priceMax} ₽`}
            img={car.imgPath}
            imgAlt={car.name}
            selected={carId && carId.id === car.id}
            onClick={() => onChange({ carId: car })}
          />
        ))}
      </section>
      <ButtonPagination
        countPages={Math.ceil(filteredModels.length / INITIAL_SLICE)}
        onClick={(page) => setSlice(page * INITIAL_SLICE)}
      />
    </form>
  )
}

export default ModelForm
