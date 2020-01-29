const format = value => {
   var parts = value.toString().split(".")
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return parts.join(".")
}

const clearFormat = value => {
   return value ? value.toString().replace(/,/g, '') : value
}

const isValidFormat = value => {
   return value.match(/^\d{1,}(\.\d{0,4})?$/)
}

export { format, clearFormat, isValidFormat }

