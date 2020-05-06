export const setParam = (param: { [s: string]: string }) => {
  const queryString = require('query-string')
  const location = window.location
  const parsed = queryString.parse(location.search)
  const [key] = Object.keys(param)
  const [value] = Object.values(param)

  if (!parsed[key]) {
    parsed[key] = value
    location.search = queryString.stringify(parsed)
  }
}
