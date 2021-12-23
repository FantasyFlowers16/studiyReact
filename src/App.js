import React, {useEffect, useState} from 'react';
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySearch from './components/PostSearch'
import MySort from './components/PostSort'
import MyButton from './components/UI/buttons/myButton'
import MyLoader from './components/UI/loader/MyLoader'

import MyModal from './components/UI/modal/MyModal'
import { usePosts } from './hook/usePost';
import axios from 'axios';
import PostService from './API/PostService';
import { useFetching } from './hook/useFetching';
import { getPagesCount } from './utils/pages';
import { usePagination } from './hook/usePagination';


function App() {
  const [posts, setPosts] = useState([]);
  const [selectOptions, setOptions] =useState([
    {
      value: "title",
      name: "По названию"
    },
    {
      value: "body",
      name: "По описанию"
    }
  ])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSort, setSelectedSort] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [totalCount, setTotalCount]= useState(0)
  const [limit, setLimit]= useState(10)
  const [totalPage, setTotalPage]= useState(10)
  const [page, setPage]= useState(10)
  const sortedAndSearchedPost = usePosts(posts, selectedSort, searchQuery)
  const [isLoadingPost, setIsLoadingPost] = useState(false)  
  const [fetchPost, isPostLoading, postError] = useFetching( async () =>{
    const posts = await PostService.getAll(limit, page)
    setTotalCount(posts.headers['x-total-count'])
    setPosts(posts.data)
    setTotalPage(getPagesCount(totalCount, limit))
    console.log('totalPage', totalPage)
  })
  // let pagesArray = usePagination(totalPage)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  const openModal = () =>{
    setIsOpenModal(true)
  }
  const SelectedPoint = (newValue) => {
    setSelectedSort(newValue)
    // setPosts([...posts].sort((a, b) => a[newValue].localeCompare(b[newValue])))
  }
  console.log(totalPage)
  useEffect(() => {
    fetchPost()
      console.log(totalPage)
      console.log("useEffect")
  },[])
  return (
    <div className="App">
      <MyModal visible={isOpenModal} setIsVisible={setIsOpenModal}>
        <PostForm  setIsVisible={setIsOpenModal} posts={posts} createPost={createPost} />
      </MyModal>
      
      <hr style={{margin: '20px 0'}} />
      <MySearch searchQuery = {searchQuery} searchingQuery={setSearchQuery} />
      <MySort selectOptions={selectOptions} selectedSort= {selectedSort} SelectedPoint={SelectedPoint} />
      <MyButton style={{display: 'block', margin: '20px 0'}} onClick={openModal}>Добавить пост</MyButton>
      {postError &&
      <h1>ПРоизошла ошибка {postError}</h1>

      }
      {isPostLoading
      ? <div className="loader-container"><MyLoader /></div>
      :<PostList posts={sortedAndSearchedPost} removePost={removePost}  title="Список постов" />
      }    </div>
  );
}

export default App;
