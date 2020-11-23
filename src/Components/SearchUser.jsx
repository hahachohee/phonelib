import React from 'react'
import styled from 'styled-components'

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 70%;
        height : 30%;
        padding : 24px;
        flex-direction : column;
        color: white;
    `,
}

const SearchUser = (props) => {

    const {  onChange, value } = props

    const handleSearch = (e) => {
        onChange(e)
    }

    return(
        <Styled.Body>
            <input 
                value={value}
                onChange={handleSearch}
                className="input"
            />
        </Styled.Body>
    )
}

export default SearchUser