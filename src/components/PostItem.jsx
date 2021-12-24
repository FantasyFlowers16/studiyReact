import React from 'react'
import { useHistory } from 'react-router-dom'
import MyButton from './UI/buttons/myButton'

const PostItem = ({post, number, removePost, openEl}) => {
  const deleteEl = () =>{
    removePost(post)
  }
  const router = useHistory()
  console.log(router)
    return (
      <div className="post">
        <div className="post__content">
          <strong>{post.id}. {post.title}</strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={deleteEl}>Удалить</MyButton>
        </div>
        <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Открыть</MyButton>

      </div>
    )
 }
 export default PostItem