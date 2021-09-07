import React from 'react';
import styled from '@emotion/styled';
import data from '../data.json';
import Card from './Card';

const ContainerGalery=styled.div`
    width: 95%;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
`;

const Galery = () => {

    const {galery}=data;

    return (
        <ContainerGalery>
         {
             galery.map((element, i)=>{
                 return <Card key={element.name} element={element}/>
             })
         }
        </ContainerGalery>
    )
}

export default Galery
