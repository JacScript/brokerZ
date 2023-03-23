import { ArrowLeftOutlined , ArrowRightOutlined } from "@material-ui/icons";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { houseArray } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    
`;

const SliderContainer = styled.div`
    width: 100%;
    height: 56vh;
    display: flex;
    position: relative;
    margin:20px;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: teal;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left &&" && "25px"};
right: ${props=> props.direction === "right" && "25px"};
margin: auto;
cursor: pointer;
opacity: 1;
z-index: 20000;

&:hover{
 background-color: #fff7f7;
 color: teal;
}
`;

const Wrapper = styled.div`
    didplay: flex;
    margin: auto;
`;

const ItemListSlide = (item)  => {


    let[counter, setCounter] = useState(0);
    const[houseImages, setHouseImages] = useState(houseArray);
    console.log(houseImages);

    const renderHouseImages = useCallback(() => {
        try{
            return houseImages.map((houseImage, idx) => {
                if(idx < 4)
                   return (
                   <Wrapper key={idx}>
                      <CategoryItem item={houseImage} />
                   </Wrapper>
                   )
            })

        }catch(error){
            console.log(error);
        }
    },[counter]);

  return (
    <Container> 
    <SliderContainer>
        <Arrow>
            <ArrowLeftOutlined />
        </Arrow>
        {renderHouseImages()}
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>
    </SliderContainer>
    </Container>
  )
}

export default ItemListSlide