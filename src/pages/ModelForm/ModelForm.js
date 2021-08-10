import React, { useState } from 'react'

import './ModelForm.scss'
import { INITIAL_SLICE, CATEGORIES } from './ModelFormConstants'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const ModelForm = ({ model, onChange, models }) => {
  const [filteredModels, setFilteredModels] = useState(models)
  const [category, setCategory] = useState(CATEGORIES[0])
  const [slice, setSlice] = useState(INITIAL_SLICE)

  const onCategorySelect = (category) => {
    let filtered = []
    if (category === CATEGORIES[0]) {
      filtered = models
    } else {
      filtered = models.filter((model) => model.category === category)
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
        {filteredModels.slice(slice - INITIAL_SLICE, slice).map((item) => (
          <Card
            key={item.id}
            title={item.name}
            subtitle={`${item.priceMin} - ${item.priceMax} ₽`}
            img={item.imgPath}
            imgAlt={item.name}
            selected={model && model.id === item.id}
            onClick={() => onChange({ model: item })}
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
