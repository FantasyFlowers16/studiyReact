import React, { useState } from 'react'
import MyButton from './UI/buttons/myButton'
import MyInput from './UI/input/myInput'

const PostForm = ({createPost, setIsVisible}) => {
  const [post, setPost] = useState({title:'', body:''})
  const addPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id:Date.now()
    }
    createPost(newPost)
    setPost({title:'', body:''})
    closeModal()
  }
  const closeModal = () => {
    setIsVisible(false)
  }
    return (
      <form className="form">
        <MyInput 
        type="text" 
        value={post.title} 
        placeholder="Название"
        onChange={e=> setPost({...post, title: e.target.value})}
        
        ></MyInput>
        {/* <input type="text" ref={bodyInputRef} /> */}
        <MyInput 
        value={post.body} 
        type="text" 
        placeholder="Описание"
        onChange={e=> setPost({...post, body: e.target.value})}
        ></MyInput>
        <MyButton  onClick={addPost}>Добавить пост</MyButton>

    </form>
    )
 }
 export default PostForm