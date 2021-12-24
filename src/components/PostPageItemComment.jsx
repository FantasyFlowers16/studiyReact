import React from 'react'

const PostPageItemComment = ({data}) => {
  return (
    <div className="page-comment">
      <h2>Комментарии</h2>
      {data.map((item,ind) => 
        <div className="page-comment__container">
          <div className="page-comment__header page-comment-header">
              <div className="page-comment-header__name">{item.name}</div>
              <div className="page-comment-header__address">{item.email}</div>
          </div>
          <div>{item.body}</div>
        </div>
      )}
    </div>
  )
}

export default PostPageItemComment
