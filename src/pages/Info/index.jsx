import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'

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
    min-height : 946px;
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
    Row: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width : 100%;
    margin-bottom : ${props => props.bottom}px;
`,
    Button: styled.div`
   display: flex;
   margin-top: 80px;
   justify-content: space-evenly;
   width: 100%;
  `,
   Main: styled.div`
   display: flex;
 width: 35%;
 height: 50px;
 align-items: center;
 justify-content: space-evenly;
 border: 5px solid #ffffff;
 margin : auto;
 margin-top: 10px;
 border-radius: 10px;
 `
}
const InfoPage = ({ match }, props) => {
    const {  onChange  } = props

    const [info, setInfo] = useState(
        {
            isEditing: false,
            name: '',
            phoneNumber: ''
        }
    )
    const handleEditButton = () => {
        setInfo((prevState) => {
                return {
                    ...prevState,
                    isEditing: !prevState.isEditing
                }
            })
    }

    const inDate = moment().format('YYYY-MM-DD HH:mm:ss')

    useEffect(()=>{
        const result = localStorage.getItem('userId')
        console.log('id : ', result)
    })

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.Wrapper>
                    <Styled.Add>
                        {info.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={match.params.name}
                                    onChange={onChange}
                                    className="input"
                                />
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    value={match.params.phoneNumber}
                                    onChange={onChange}
                                    className="input"
                                />
                            </>
                        ) : (
                                <>
                                    <Styled.Row>
                                        <h2>이름 : {match.params.name}</h2>
                                    </Styled.Row>
                                    <Styled.Row>
                                        <h2>전화번호 : {match.params.phoneNumber}</h2>
                                    </Styled.Row>
                                </>
                            )}
                        <Styled.Row>
                            {inDate}
                        </Styled.Row>
                        <Styled.Button>
                            <button
                                className="loginBtn"
                                onClick={handleEditButton}
                            >
                                {info.isEditing ? '저장' : '수정'}
                            </button>
                            <button className="loginBtn">삭제</button>
                        </Styled.Button>
                    </Styled.Add>
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Body>
    )
}

export default InfoPage