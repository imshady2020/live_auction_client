import moment from "moment"

export const getFeatured = (products) => {
  const featured_products = products.filter((product) => product.featured === true)
  return featured_products
}
export const getEndingIn15Minutes = (products) => {
  const getEndingIn15Minutes = []
  products.map((product) => {
    if (
      moment().diff(product.end_time, "minutes") >= -15 &&
      moment().diff(product.end_time, "minutes") < 0
    ) {
      getEndingIn15Minutes.push(product)
    }
  })
  return getEndingIn15Minutes
}
export const getTimeLeft = (time) => {
  const timeLeft = moment().diff(time, "minutes")
  return timeLeft
}
export const formatTimeLeft = (mins) => {
  if (mins < 0) {
    const days = Math.trunc(Math.abs(mins) / 1440)
    const hours = Math.trunc(Math.abs(mins) / 60) - days * 24
    const minutes = Math.abs(mins) % 60
    return { days, hours, minutes }
  } else {
    return
  }
}
