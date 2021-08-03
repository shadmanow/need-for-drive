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

const ChoiceModelForm = ({ model }) => {
  const [curModel, setCurModel] = useState(null)
  const [models, setModels] = useState([])
  const [sort, setSort] = useState('Все модели')

  const onSortValueChange = (value) => {
    setSort(value)
  }

  return (
    <form className="choice-model-form">
      <section className="choice-model-form__radio-wrapper">
        <Radio
          label="Все модели"
          value="Все модели"
          checked={sort === 'Все модели'}
          onClick={onSortValueChange}
        />
        <Radio
          label="Эконом"
          value="Эконом"
          checked={sort === 'Эконом'}
          onClick={onSortValueChange}
        />
        <Radio
          label="Премиум"
          value="Премиум"
          checked={sort === 'Премиум'}
          onClick={onSortValueChange}
        />
      </section>
      <section className="choice-model-form__cards-wrapper">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            subtitle={item.price}
            img={item.img}
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
