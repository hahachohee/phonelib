import React from 'react'
import styled from 'styled-components'

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
}
const AddUser = (props) => {

    const { onClick } = props

    return (
        <Styled.Body>
            <button
                onClick={
                    onClick
                }>추가</button>
        </Styled.Body>
    )
}

export default AddUser