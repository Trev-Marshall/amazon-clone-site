import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase'

function Login({ setUser }) {

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      let newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      console.log(user);
    }).catch((error) => {
      alert(error.message);
    })
  }

  return (
    <Container>
      <Content>
        <AmazonLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png'></AmazonLogo>
        <h1>Sign into Google</h1>
        <LoginButton
          onClick={signIn}
        >Sign in with Google</LoginButton>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    box-shadow: 0 0 5px 2px gray;
    text-align: center;
    padding: 100px;
    border-radius: 20px;
    background-color: white;
    @media (max-width: 1080px) {
      margin: auto;
      padding: 20px;
    }
`
const AmazonLogo = styled.img`
    height: 80px;
    margin-bottom: 35px;
    @media (max-width: 1080px) {
      margin-top: 20px;
    }
`
const LoginButton = styled.button`
    margin-top: 20px;
    background-color: #85f8ef;
    border: 1px solid gray;
    padding: 10px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
`
