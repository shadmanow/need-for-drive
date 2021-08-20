import { ceilToDays, toMinutes } from '../../helpers/DateTimeHelper'

export default function priceCalc(order) {
  const price = durationCalc(order) + servicesCalc(order)
  return price >= 0 ? price : 0
}

const durationCalc = ({ dateFrom, dateTo, rateId }) => {
  if (rateId.unit === 'мин') {
    return toMinutes(dateFrom, dateTo) * rateId.price
  }

  if (rateId.unit === 'сутки') {
    return ceilToDays(dateFrom, dateTo) * rateId.price
  }

  if (rateId.unit.includes('дней')) {
    const unitParts = rateId.unit.split(' ')
    return (
      Math.ceil(ceilToDays(dateFrom, dateTo) / Number.parseInt(unitParts[0])) *
      rateId.price
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
