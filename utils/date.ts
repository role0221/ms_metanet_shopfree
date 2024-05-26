import moment from "moment"

export const genY2Digit = () => {
  const d = new Date()
  let year = d.getFullYear()
  year = year + 543
  return year.toString().substring(2, 4)
}

export const dayToText = () => {
  return {
    Mon: { textTh: 'จันทร์', textThShot: 'จ.' },
    Tue: { textTh: 'อังคาร', textThShot: 'อ.' },
    Wed: { textTh: 'พุธ', textThShot: 'พ.' },
    Thu: { textTh: 'พฤหัสบดี', textThShot: 'พฤ.' },
    Fri: { textTh: 'ศุกร์', textThShot: 'ศ.' },
    Sat: { textTh: 'เสาร์', textThShot: 'ส.' },
    Sun: { textTh: 'อาทิตย์', textThShot: 'อา.' }
  }
}

export const dateTimeToView = (date?: any, isFullYear = true, locales = 'th') => {
  let today: any = Date.now()
  if (date) today = new Date(date)
  return (
    new Intl.DateTimeFormat(locales, {
      year: isFullYear ? 'numeric' : '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).format(today) + ' น.'
  )
}

export const dateToView = (date?: any, isFullYear = true, locales = 'th') => {
  let today: any = Date.now()
  if (date) today = new Date(date)
  return new Intl.DateTimeFormat(locales, {
    year: isFullYear ? 'numeric' : '2-digit',
    month: '2-digit',
    day: '2-digit'
  }).format(today)
}

export const convertToDateFormat = (date: any, type = 'full', lang?: 'th' | 'en') => {
  const monthNames: any = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม.', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
  const monthNamesEn: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August.', 'September', 'October', 'November', 'December']
  const numMonth = Number(moment(date).format('M'))
  const month = lang == 'en' ? monthNamesEn[numMonth - 1] : monthNames[numMonth - 1]
  const year = lang == 'en' ? moment(date).format('YYYY') : moment(date).add(543, 'year').format('YYYY')
  const dateOfData = moment(date).format('DD')
  const newDate = dateOfData + " " + month + " " + year
  return newDate

}

export const timeToView = (date?: any, locales = 'th') => {
  let today: any = Date.now()
  if (date) today = new Date(date)
  return new Intl.DateTimeFormat(locales, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).format(today)
}

export const renderAge = (date: Date | null | string, unit: 'year' | 'month' | 'day') => {
  const now = moment()
  const bd = moment(date)
  if (unit === 'year') return now.diff(bd, 'year')
  if (unit === 'month') return now.diff(bd.add(now.diff(bd, 'year'), 'years'), 'months')
  if (unit === 'day') return now.diff(bd.add(now.diff(bd.add(now.diff(bd, 'year'), 'years'), 'months'), 'months'), 'days')
}