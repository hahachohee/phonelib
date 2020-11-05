import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
        border : 1px solid #ffffff;
        padding : 24px;
        flex-direction : column;
        color: white;
    `,
    Row: styled.div`
        display : flex;
        align-items: center;
        justify-content: space-evenly;
        width : 100%;
        margin-bottom : ${props => props.bottom}px;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}

const PhoneBookInfo = (props) => {

    const { info, onChange, onClickEditButton, remove } = props

    const { id, isEditing, infos } = info


    const handleChangeInput = (e) => {
        onChange(e, id)
    }


    const inputList = infos.map((res) => {
        return (
            <Styled.Row key={res.name} bottom="30">
                <Input
                    info={res}
                    isEditing={isEditing}
                    onChange={handleChangeInput}
                />
            </Styled.Row>
        )
    })

    return (
        <Styled.Body>
            {inputList}
            <Styled.Row>
                <button
                    onClick={e => {
                        e.preventDefault()
                        onClickEditButton(id)
                    }}
                >
                    {isEditing ? '저장' : '수정'}
                </button>
                <button
                    onClick={
                        remove
                    }
                >
                    삭제
                </button>
            </Styled.Row>
        </Styled.Body>
    );
};

PhoneBookInfo.defaultProps = {
    info: {
        title: '-',
    }
}

export default PhoneBookInfo;