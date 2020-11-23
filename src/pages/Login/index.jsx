import React, { useState } from 'react'
import styled from 'styled-components'
import './login.css'

const Styled = {
    Body: styled.div`
    display : flex;
    width : 100%;
    background-color : #FF7E9D;
    flex-direction : column;
  `,
    Container: styled.div`
    display : flex;
    width : 1000px;
    min-height : 968.5px;
    margin : auto;
    flex-direction : column;
    background-color : #FF7E9D;
      text-align: center;
  `,
    Wrapper: styled.div`
    display : flex;
    width : 100%;
  `,
    Add: styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width : 100%;
    border : 5px solid #FFFFFF;
    padding : 24px;
    flex-direction : column;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 20px;
    height: 500px;
    border-radius: 10px;
`,
    Button: styled.div`
   display: flex;
   margin-top: 80px;
   justify-content: space-evenly;
   width: 100%;
  `,
}

const Login = ({history}) => {



    const [loginInfo , setLoginInfo ] = useState(
        {
            id : '',
            password : ''
        }
    )

    const handleLogin = (e) => {
        setLoginInfo((prevState) => {
            return{
                ...prevState,
                [e.target.id] : e.target.value
            }
        })
    }

    const handleLoginButton = (e) => {
        if(`${loginInfo.id}` === ''){
            alert('아이디를 입력하세요')
        }else if(`${loginInfo.password}` === ''){
            alert('비밀번호를 입력하세요')
        }else{
            localStorage.setItem('id', `${loginInfo.id}`)
            localStorage.setItem('password', `${loginInfo.password}`)
            history.push(`/`)
        }
    }

    return(
        <Styled.Body>
            <Styled.Container>
                <Styled.Wrapper>
                    <Styled.Add>
                        <input 
                            type="id"
                            id="id"
                            value={loginInfo.id}
                            onChange={handleLogin}
                            className="input"
                        />
                        <input 
                            type="password"
                            id="password"
                            value={loginInfo.password}
                            onChange={handleLogin}
                            className="input"
                        />
                        <button
                            className="loginBtn"
                            onClick={handleLoginButton}
                        >로그인</button>
                    </Styled.Add>
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Body>
    )
}

export default Login