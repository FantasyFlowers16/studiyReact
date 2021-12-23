export const getPagesCount = (setTotalCount, limit) => {
  console.log('test',Math.ceil(setTotalCount/limit))
  return Math.ceil(setTotalCount/limit)
}