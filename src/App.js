import React, { useState } from "react";
import styled from "styled-components";

import PhoneBookList from "./components/common/PhoneBookList";
import AddUser from "./components/common/AddUser";
import UserSearch from './components/common/UserSearch'

const Styled = {
  Body: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
  `,
  Container: styled.div`
    display: flex;
    width: 100%;
    min-height: 1000px;
    margin: auto;
    flex-direction: column;
    background-color: black;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  Add: styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
  `,
};

function App() {
  const [phoneBookInfos, setPhoneBookInfos] = useState([
    {
      id: 1,
      isEditing: false,
      infos: [
        {
          title: "이름",
          name: "hello",
          value: "",
          type: "text",
        },
        {
          title: "전화번호",
          name: "phoneNumber",
          value: "",
          type: "number",
        },
      ],
    },
    {
      id: 2,
      isEditing: false,
      infos: [
        {
          title: "이름",
          name: "hello",
          value: "",
          type: "text",
        },
        {
          title: "전화번호",
          name: "phoneNumber",
          value: "",
          type: "number",
        },
      ],
    },
  ]);



  const handleOnChangePhoneBookInfo = (e, id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (res.id === id) {
          return {
            ...res,
            infos: res.infos.map((inRes) => {
              if (e.target.name === inRes.name) {
                return {
                  ...inRes,
                  value: e.target.value,
                };
              }
              return inRes;
            }),
          };
        }
        return res;
      });
    });
  };

  

  const handleOnClickPhoneBookInfoEditButton = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (id === res.id) {
          return {
            ...res,
            isEditing: !res.isEditing,
          };
        }
        return res;
      });
    });
  };

  const handleSearch = (e) => {
    setPhoneBookInfos((prevState) => {
      prevState.indexOf(e.target.value)
      prevState.filter(res => res.value === e.target.value)
      })
    }

  const handleCreate = () => {
    setPhoneBookInfos((prevState) => {
      return prevState.concat({
        id: prevState.length + 1,
        isEditing: false,
        infos: [
          {
            title: "이름",
            name: "hello",
            value: "",
            type: "text",
          },
          {
            title: "전화번호",
            name: "phoneNumber",
            value: "",
            type: "number",
          },
        ],
      });
    });
  };

  const handleRemove = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.filter(res => res.id !== id)
    });
  };

  return (
    <Styled.Body>
      <Styled.Container>
      <Styled.Add>
        <UserSearch onChange={handleSearch}/>
      </Styled.Add>
      <Styled.Add>
        <AddUser onClick={handleCreate} />
      </Styled.Add>
        <Styled.Wrapper>
          <PhoneBookList
            infos={phoneBookInfos}
            onChange={handleOnChangePhoneBookInfo}
            onClickEditButton={handleOnClickPhoneBookInfoEditButton}
            remove={handleRemove}
          />
        </Styled.Wrapper>
      </Styled.Container>
    </Styled.Body>
  );
}


export default App;
