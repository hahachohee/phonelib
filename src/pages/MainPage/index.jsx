import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneDirectoryList from '../../Components/PhoneDirectoryList'
import AddUser from '../../Components/AddUser'
import SearchUser from '../../Components/SearchUser'
import moment from 'moment'
import 'moment/locale/ko'


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
    min-height : 1000px;
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
  display: flex;
  width: 35%;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
  border: 5px solid #ffffff;
  margin : auto;
  margin-top: 10px;
  border-radius: 10px;
  `,
}
function MainPage({ history }) {

  const [searchKeyword, setSearchKeyword] = useState('')

  const [phoneBookInfos, setPhoneBookInfos] = useState([
    {
      id: 0,
      name: '119',
      phoneNumber: '112',
      isEditing: false,
      isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 1,
      name: '',
      phoneNumber: '',
      isEditing: false,
      isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
  ])
  /* const handleChange = (e) => {
    setPhoneBookInfos({
      ...phoneBookInfos,
      [e.target.name] : e.target.value
    })
  } */
  const handleInfo = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (id === res.id) {
          if (res.isEditing === false) {
            history.push(`/info/${res.name}/${res.phoneNumber}`)
          }
        }
        return res
      })
    })
  }
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
  }
  const handleCreate = () => {
    setPhoneBookInfos((prevState) => {
      return prevState.concat(
        {
          id: prevState.length + 1,
          name: '',
          phoneNumber: '',
          isEditing: false,
          isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        },
      )
    })
  }
  const handleEditButton = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (id === res.id) {
          return {
            ...res,
            isEditing: !res.isEditing
          }
        }
        return res
      })
    })
  }
  const handleRemove = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.filter(res => res.id !== id)
    })
  }
  const handleChange = (e, id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (res.id === id) {
          return {
            ...res,
            [e.target.name]: e.target.value
          }
        }
        return res
      })
    })
  }




  return (
    <Styled.Body>
      <Styled.Add>
        <SearchUser
          onChange={handleSearch}
          infos={searchKeyword}
        />
      </Styled.Add>
      <Styled.Add>
        <AddUser
          onClick={handleCreate}
        />
      </Styled.Add>
      <Styled.Container>
        <Styled.Wrapper>
          <PhoneDirectoryList
            onChange={handleChange}
            infos={phoneBookInfos.filter((res) => {
              return res.name.indexOf(searchKeyword) > -1
            })}
            onClickEditButton={handleEditButton}
            remove={handleRemove}
            rowter={handleInfo}
          />
        </Styled.Wrapper>
      </Styled.Container>
    </Styled.Body>
  );
}
export default MainPage;