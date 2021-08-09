import React, { useState, useEffect } from 'react'

import './ModelForm.scss'
import { API_URL } from '../../hooks/useApi'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const INITIAL_SLICE = 6
const CATEGORIES = ['Все модели', 'Эконом+', 'Люкс', 'Спорт']

const ModelForm = ({ model, onChange, models }) => {
  const [mappedModels, setMappedModels] = useState([])
  const [filteredModels, setFilteredModels] = useState([])
  const [category, setCategory] = useState(CATEGORIES[0])
  const [slice, setSlice] = useState(INITIAL_SLICE)

  /* eslint-disable */
  useEffect(() => {
    const curModels = models.map((model) => {
      let imgPath = model.thumbnail.path
      if (imgPath.startsWith('/files')) {
        imgPath = `${API_URL}/${imgPath}`
      }
      return {
        id: model.id,
        name: model.name,
        priceMin: model.priceMin,
        priceMax: model.priceMax,
        imgPath,
        category: model.categoryId ? model.categoryId.name : null,
      }
    })
    setMappedModels(curModels)
    setFilteredModels(curModels)
  }, [])
  /* eslint-enable */

  const onCategorySelect = (category) => {
    let filtered = []
    if (category === CATEGORIES[0]) {
      filtered = mappedModels
    } else {
      filtered = mappedModels.filter((model) => model.category === category)
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
