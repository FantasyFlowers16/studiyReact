import React from 'react'
import { useHistory } from 'react-router'


const PostPageItem = ({data}) => {
  const router = useHistory()
  return (
    <div>
      <div onClick={() => router.push(`/posts`)} >Назад</div>
      <div className="post-page">
          <h2>{data.title}</h2>
      <div>{data.body}</div>
      </div>
    </div>
  )
}

export default PostPageItem
