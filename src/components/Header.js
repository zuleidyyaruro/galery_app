import React from 'react'
import styled from '@emotion/styled';

const ContainerHeader = styled.div`
    padding: 20px;
    color: black;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    margin: auto;
`;

const Header = () => {
    return (
        <ContainerHeader>
            GALERY.
            <hr />
        </ContainerHeader>
    )
}

export default Header
