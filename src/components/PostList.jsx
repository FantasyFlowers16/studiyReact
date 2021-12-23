import React from 'react'
import PostItem from './PostItem'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
const PostList = ({posts, title, removePost}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    )
  }
    return (
      <div className="post-list">
        <h1>{title}</h1>
        <TransitionGroup className="todo-list">
          {posts.map((post,ind) => 
            <CSSTransition
            key={post.id}
             timeout={500}
             classNames="post"
           >
              <PostItem removePost={removePost} post={post} number={ind + 1} />
            </CSSTransition>
          )}

          </TransitionGroup>
          </div>
    )
 }
 export default PostList