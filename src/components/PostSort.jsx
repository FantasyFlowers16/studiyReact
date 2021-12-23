import React from 'react'
import MySelect from './UI/select/mySelect'

const PostSort = ({ selectedSort, SelectedPoint, selectOptions }) => {
    return (
      <MySelect
        value={selectedSort} 
        onChange={SelectedPoint}
        defaultValue="Сортировка по" 
        options ={selectOptions} 
    />
    )
 }
 export default PostSort