import React from 'react'
import MyInput from './UI/input/myInput'

const PostSearch = ({ searchQuery, searchingQuery }) => {
    return (
      <div       className="input__container">
        <MyInput 
          value={searchQuery}
          onChange={e => searchingQuery(e.target.value) }
          type="text" 
          placeholder="Поиск"
        />
      </div>
    )
 }
 export default PostSearch