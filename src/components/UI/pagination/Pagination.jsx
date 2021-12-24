import React from 'react'
import { usePagination } from '../../../hook/usePagination';

const Pagination = ({totalPage, changePage, page }) => {
  let pagesArray = usePagination(totalPage)

  return (
    <div className="page__wrapper" >
      {pagesArray.map(p => 
          <span 
            onClick ={() => changePage(p)}  
            key={p} className={page === p ? 'page page__current' : 'page'} >{p}
          </span>
        )}
      </div>
  )
}

export default Pagination
 