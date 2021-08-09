import React, { useState } from 'react'

import './ModelForm.scss'
import car1 from '../../assets/images/car1.png'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const items = [
  { id: 'ab1', name: 'ELANTRA', price: '12 000 - 25 000 ₽', img: car1 },
  { id: 'ab2', name: 'ELANTRA', price: '12 000 - 25 000 ₽', img: car1 },
  { id: 'ab3', name: 'ELANTRA', price: '12 000 - 25 000 ₽', img: car1 },
  { id: 'ab4', name: 'ELANTRA', price: '12 000 - 25 000 ₽', img: car1 },
  { id: 'ab5', name: 'ELANTRA', price: '12 000 - 25 000 ₽', img: car1 },
  { id: 'ab6', name: 'ELANTRA', price: '12 000 - 25 000 ₽', img: car1 },
]

const sorts = ['Все модели', 'Эконом', 'Премиум']

const ModelForm = ({ model, onChange }) => {
  const [curModel, setCurModel] = useState(null)
  const [models, setModels] = useState([])
  const [sort, setSort] = useState(sorts[0])

  const onSortValueChange = (value) => setSort(value)

  const onModelSelect = (model) => {
    setCurModel(model)
    onChange({ model })
  }

  return (
    <form className="form">
      <section className="form__section">
        {sorts.map((_sort, index) => (
          <Radio
            key={`${_sort}-${index}`}
            label={_sort}
            value={_sort}
            checked={sort === _sort}
            onClick={onSortValueChange}
          />
        ))}
      </section>
      <section className="form__cards-wrapper">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            subtitle={item.price}
            img={item.img}
            imgAlt={item.name}
            selected={curModel && curModel.id === item.id}
            onClick={() => onModelSelect(item)}
          />
        ))}
      </section>
      <ButtonPagination countPages={10} onClick={() => {}} />
    </form>
  )
}

export default ModelForm
