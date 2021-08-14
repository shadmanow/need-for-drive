import { ceilToDays, toMinutes } from '../../helpers/DateTimeHelper'

export default function costCalc(order) {
  return durationCalc(order) + servicesCalc(order)
}

const durationCalc = ({ startDate, endDate, rate }) => {
  if (rate.unit === 'мин') {
    return toMinutes(startDate, endDate) * rate.price
  }

  if (rate.unit === 'сутки') {
    return ceilToDays(startDate, endDate) * rate.price
  }

  if (rate.unit.includes('дней')) {
    const unitParts = rate.unit.split(' ')
    return (
      Math.ceil(
        ceilToDays(startDate, endDate) / Number.parseInt(unitParts[0])
      ) * rate.price
    )
  }
}

const servicesCalc = ({ isFullTank, isNeedChildChair, isRightWheel }) => {
  let price = 0
  if (isFullTank) {
    price += 500
  }
  if (isNeedChildChair) {
    price += 200
  }
  if (isRightWheel) {
    price += 1600
  }
  return price
}
