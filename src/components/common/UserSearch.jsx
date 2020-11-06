import React from 'react';
import styled from 'styled-components';

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 70%;
        height : 30%;
        border : 1px solid #ffffff;
        padding : 24px;
        flex-direction : column;
        color: white;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}

const UserSearch = (props) => {

    const { value} = props

    const handleSearch = (e) => {
        console.log(e.target.value)
    }

    return (
        <Styled.Body>
            <Styled.Col width="50">
                    <input
                        type={"text"}
                        value={value}
                        onChange={handleSearch}
                    />
            </Styled.Col>
        </Styled.Body>
    );
};

export default UserSearch;