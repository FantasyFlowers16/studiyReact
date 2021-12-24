import React from 'react'
import MyButton from '../components/UI/buttons/myButton'
import MyInput from '../components/UI/input/myInput'
import MyModal from '../components/UI/modal/MyModal'

const Login = () => {
  return (
    <div>
      <MyModal visible={true}>
        <h1>Авторизация</h1>
          <form className="login-form" >
            <MyInput type="text" placeholder="Логин"></MyInput>
            <MyInput type="password" placeholder="Пароль"></MyInput>
            <MyButton>Войти</MyButton>
          </form>
          </MyModal>
    </div>
  )
}

export default Login
