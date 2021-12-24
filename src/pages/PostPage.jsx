import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostService from '../API/PostService'
import PostPageItemComment from '../components/PostPageItemComment'
import MyLoader from '../components/UI/loader/MyLoader'
import { useFetching } from '../hook/useFetching'
import PostPageItem from './PostPageItem'




const PostPage = () => {
  const param = useParams()
  const [post, setPost] = useState([]);
  const [postComment, setPostComment] = useState([]);

  const [fetchPostOnly, isPostLoading, postError] = useFetching( async (id) =>{
    const postItem = await PostService.getPost(id)
    setPost(postItem.data)
  })
  const [fetchPostComment, isPostLoadingComments, postErrorComments] = useFetching( async (id) =>{
    const postItem = await PostService.getPostComment(id)
    setPostComment(postItem.data)
    console.log(postItem.data)
  })

  useEffect(() => {
    fetchPostOnly(param.id)
  },[])
  useEffect(() => {
    fetchPostComment(param.id)
  },[])
  return (
    <div>
      {postError &&
        <h1>ПРоизошла ошибка {postError}</h1>
      }
      {isPostLoading
        ? <div className="loader-container"><MyLoader /></div>
        : <div><PostPageItem data={post} /></div>
      }
      {isPostLoadingComments
        ? <div className="loader-container"><MyLoader /></div>
        : <div><PostPageItemComment data={postComment} /></div>
      }
    </div>
  )
}

export default PostPage
