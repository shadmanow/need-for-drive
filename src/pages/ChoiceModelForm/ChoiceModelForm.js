import React, { useState } from 'react'

import './ChoiceModelForm.scss'
import car1 from '../../assets/images/car1.png'
import Radio from '../../components/Radio/Radio'
import Card from '../../components/Card/Card'
import ButtonPagination from './ButtonPagination'

const ChoiceModelForm = ({ model }) => {
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
        <Card title="ELANTRA" subtitle="12 000 - 25 000 ₽" img={car1} />
        <Card title="ELANTRA" subtitle="12 000 - 25 000 ₽" img={car1} />
        <Card title="ELANTRA" subtitle="12 000 - 25 000 ₽" img={car1} />
        <Card title="ELANTRA" subtitle="12 000 - 25 000 ₽" img={car1} />
        <Card title="ELANTRA" subtitle="12 000 - 25 000 ₽" img={car1} />
        <Card title="ELANTRA" subtitle="12 000 - 25 000 ₽" img={car1} />
      </section>
      <ButtonPagination countPages={10} />
    </form>
  )
}

export default ChoiceModelForm
