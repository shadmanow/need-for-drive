import React, { useState } from 'react'

import './ChoiceModelForm.scss'
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

const sortValues = ['Все модели', 'Эконом', 'Премиум']

const ChoiceModelForm = ({ model }) => {
  const [curModel, setCurModel] = useState(null)
  const [models, setModels] = useState([])
  const [sort, setSort] = useState(sortValues[0])

  const onSortValueChange = (value) => {
    setSort(value)
  }

  return (
    <form className="choice-model-form">
      <section className="choice-model-form__radio-wrapper">
        {sortValues.map((sortValue, index) => (
          <Radio
            key={`${sortValue}-${index}`}
            label={sortValue}
            value={sortValue}
            checked={sort === sortValue}
            onClick={onSortValueChange}
          />
        ))}
      </section>
      <section className="choice-model-form__cards-wrapper">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            subtitle={item.price}
            img={item.img}
            imgAlt={item.name}
            selected={curModel && curModel.id === item.id}
            onClick={() => setCurModel(item)}
          />
        ))}
      </section>
      <ButtonPagination countPages={10} onClick={() => {}} />
    </form>
  )
}

export default ChoiceModelForm
