import React from 'react'
import MyButton from './UI/buttons/myButton'
const PostItem = ({post, number, removePost}) => {
  const deleteEl = () =>{
    removePost(post)
  }
    return (
      <div className="post">
        <div className="post__content">
          <strong>{number}. {post.title}</strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={deleteEl}>Удалить</MyButton>
        </div>
      </div>
    )
 }
 export default PostItem