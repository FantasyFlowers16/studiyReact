import About from "../pages/About"
import Error from "../pages/Error"
import Login from "../pages/Login"
import PostPage from "../pages/PostPage"
import Posts from "../pages/Posts"

export const privateRoutes = [
  {path:'/about', component:About, exact: false},
  {path:'/error', component:Error, exact:false},
  {path:'/posts', component:Posts, exact:true},
  {path:'/posts/:id', component:PostPage, exact:true},
]
export const publicRoutes = [
  {path:'/login', component: Login, exact: false},
]