import React from 'react'
import { withRouter } from "react-router-dom";   

const GlobalHeader = ({location}) => {


    const handleLogOut = () => {
        localStorage.clear()
        window.location.href ='/login'
      }
    
      const handleLogin = () => {
        window.location.href = '/login'
      }
      const handleMainPage = () => {
        window.location.href = '/'
      }
    
      
    return(
      <>
      {`${location.pathname}` === `/login` ? ('') : 
        <div className="nav">
        <button 
          className="loginBtn"
          onClick={handleMainPage}
        >
          메인 페이지
        </button>
          {localStorage.getItem('id' && 'password') ? (
            <div
              className="td"
            >
              {localStorage.getItem('id')}
            </div>
            ) :
            <button
              className="loginBtn"
              onClick={handleLogin}
            >
                로그인
            </button>
            }
            {localStorage.getItem('id' && 'password') ? (
             <button 
              className="loginBtn"
              onClick={handleLogOut}
            >
              로그아웃
            </button> 
            ) : (
              ''
            )}
            </div>
            }
            </>
          
    )
}

export default withRouter(GlobalHeader)