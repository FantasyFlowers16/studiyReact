import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { publicRoutes, privateRoutes   } from '../../router';


const AppRouter = () => {
  const isAuth = true;
  return (
    isAuth
    ?
    <Switch>
      {publicRoutes.map((route,ind)=> 
        <Route 
          key={ind}
          component={route.component} 
          path={route.path} 
          exact={route.exact}
        />
      )}
      <Redirect to='/posts'></Redirect>
    </Switch>
    :
    <Switch>
      {privateRoutes.map((route,ind)=> 
        <Route 
          key={ind}
          component={route.component} 
          path={route.path} 
          exact={route.exact}
        />
       )}
      <Redirect to='/login'></Redirect>
    </Switch>
  )
}

export default AppRouter
