import React from 'react'
import styled from "styled-components";
import CategoryItem from '../../category-item-component/CategoryItemComponent';

const Container = styled.div`
    opacity: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`;

const Title = styled.h1`
   display: flex;
   justify-content: center;
   align-item: center;
   margin-top: 10px;
`;


const SliderContainer = styled.div`
   width: 100%;
   height: 56vh;
   display: flex;
   position: relative;
   margin:20px;
`;


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    // justify-content: space-around;
    margin: auto auto 0 auto ;
    behaviour: smooth;
    // transition: all 1.5s ease-out;

`;


const CollectionItemPreview = ({ title,items }) => {
    return (
        <Container>
            <Title >{title.toUpperCase()}</Title>
            <SliderContainer>
                <Wrapper >
                    {items
                        .filter((item, idx) => idx < 4)
                        .map(({id, ...otherItemProps}) => (
                            <CategoryItem key={id} {...otherItemProps} />
                        ))
                    }
                </Wrapper>
            </SliderContainer>
        </Container>
    )
}

export default CollectionItemPreview