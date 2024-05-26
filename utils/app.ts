
const schemaValidator = async (data, schema) => {
  try {
    return await schema.validateAsync(data)
  } catch (error) {
    return error
  }
}
const validateEmail = (emailAdress) => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (emailAdress.match(regexEmail)) return true
  return false
}
export const numberFormat = (num: any, minDigits = 2, maxDigits = 2) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits
  })
  return formatter.format(num)
}

export { schemaValidator, validateEmail, }
