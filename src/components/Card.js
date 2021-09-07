import React from 'react';
import styled from '@emotion/styled';

const CardContainer=styled.div`
    
    width: 21%;
    height: 350px;
    padding: 10px;
    position: relative;
    transition: all 0.2s linear;
    
    img {
        width: 100%;
        height: 100%;
    }

    :hover {
        transform: scale(1.05cd);
    }
`;

const Title=styled.p`
    font-weight: bolder;
    font-size: 20px;
    padding-bottom: 5px;

`;

const Author=styled.p`
    font-size: 12px;
`;

const Card = ({element}) => {

    return (
        <CardContainer>
            <img src={element.url} alt="" />
            <Title className="title">{element.name}</Title>
            <Author className="author">{element.author}</Author>
        </CardContainer>
    )
}

export default Card
