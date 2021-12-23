import { useMemo } from 'react';

export const UserSortedPost = (posts, selectedSort) => {
  // eslint-disable-line react-hooks/rules-of-hooks
  const getSortedPosts = useMemo( () => {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else{
      return posts
    }
  }, [selectedSort, posts])
  return getSortedPosts
}

// export const userSortedPost = (posts, selectedSort) => {
//   const sortPosts = useMemo( () => {
//     if(selectedSort) {
//       return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
//     }
//       return posts
//   }, [selectedSort, posts])

//   return sortPosts
// }


// export const userSortedPost = (posts, selectedSort) => {
//   const sortPosts = useMemo( () => {
//     if(selectedSort) {
//       return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
//     } 
//     return posts
//   }, [selectedSort, posts] )
//   return sortPosts
// }


export const usePosts = (post, sort, searchQuery) => {
  const sortedPost = UserSortedPost(post, sort)
  const sortedAndSearchedPost = useMemo( () => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedPost] )
  return sortedAndSearchedPost
}