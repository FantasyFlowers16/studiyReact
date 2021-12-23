

import {useMemo} from 'react';

export const usePagination = (totalPage) => {
  const getCountPages = useMemo( () => {
    let pagesArray = []
    for (let i = 1; i < totalPage + 1; i++) {
      pagesArray.push(i)
    }
    return pagesArray
  }, [totalPage])
  return getCountPages
}

