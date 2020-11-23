import React from 'react'
import styled from 'styled-components'

import PhoneDirectoryInfo from './PhoneDirectoryInfo'

const Styled = {
    Body: styled.div`
        display : flex;
        flex-direction : column;
        width : 600px;
        margin : 30px auto;
        align-items: center; 
        justify-content: center;

    `,

    PhoneBookInfoWrapper : styled.div`
        display : flex; 
        width : 100%;
        margin-bottom : 15px;
        :last-child {
            margin-bottom : 0;
        }
    `
}

const PhoneDiretoryList = (props) => {

    const { infos, onChange, onClickEditButton, remove , rowter} = props

    const list = infos.map((res, i) => {
        return(
            <Styled.PhoneBookInfoWrapper
                key={i}
            >
                <PhoneDirectoryInfo 
                    info={res}
                    onClickEditButton={onClickEditButton}
                    onChange={onChange}
                    remove={remove}
                    rowter={rowter}
                />
            </Styled.PhoneBookInfoWrapper>
        )
    })

    return (
        <Styled.Body>
            {list} 
        </Styled.Body>
    )
}

export default PhoneDiretoryList