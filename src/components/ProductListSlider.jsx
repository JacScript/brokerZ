import { ArrowLeftOutlined , ArrowRightOutlined } from "@material-ui/icons";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { popularItems2, popularItems3} from "../data";
import Product from "./Product";

const Container = styled.div`
    opacity: 1;
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
   left: ${props=> props.direction === "bottomleft" && "25px"};
   right: ${props=> props.direction === "bottomright" && "25px"};
   margin: auto;
   cursor: pointer;
   opacity: 1;
   z-index: 40;

   &:hover{
    background-color: #fff7f7;
    color: teal;
    opacity: 1;
  }

  
`;

const Wrapper = styled.div`
    display: flex;
    // justify-content: space-around;
    margin: auto;
   transition: all 1.5s ease-out;
//    transform: translateX(${(props) => props.images * -100}vw);
`;


const ProductListSlider = (item) => {
    
    let [counter, setCounter] = useState(0)
    const [images, setImages] = useState(popularItems2);
    const [accessories, setAccessories] = useState(popularItems3);

    const renderPopularItems = useCallback(() => {
        try {
            return images.map((image, idx) => {
                if (idx < 4)
                    return (
                        <Wrapper key={idx}>
                            <Product item={image} />
                        </Wrapper>
                    )
            })
        } catch (error) {
            console.log(error)
        }
    }, [counter]);

    const renderAccessories = useCallback(() => {
        try {
            return accessories.map((accessory, idx) => {
                if (idx < 4)
                    return (
                        <Wrapper key={idx}>
                            <Product item={accessory} />
                        </Wrapper>
                    )
            })
        } catch (error) {
            console.log(error)
        }
    }, [counter]);

    const handleClick = (direction) => {
        try {
            if (direction === "right") {
                const removedImage = images.shift();
                images.push(removedImage);
                setImages(images);
            } else if(direction === "left") {
                const toRemoveImage = images[3]
                const newImages = images.filter((img) => img.id !== toRemoveImage.id)
                const lastImageToFirst = newImages.pop()
                const newList = [lastImageToFirst, ...newImages]
                newList.push(toRemoveImage)
                setImages(newList)
            } else if(direction === "bottomright") {
                const removedAccessory = accessories.shift();
                accessories.push(removedAccessory);
                setAccessories(accessories);
            } else if(direction === "bottomleft") {
                const toRemoveAccessory = accessories[3]
                const newAccessories = accessories.filter((img) => img.id !== toRemoveAccessory.id)
                const lastAccessoryToFirst = newAccessories.pop()
                const newList = [lastAccessoryToFirst, ...newAccessories]
                newList.push(toRemoveAccessory)
                setAccessories(newList)
            };

            setCounter(counter += 1)

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <Container> 
            <SliderContainer>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                {renderPopularItems()}
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </SliderContainer>
            <SliderContainer>
                <Arrow direction="left" onClick={() => handleClick("bottomright")}>
                    <ArrowLeftOutlined />
                </Arrow>
                 {renderAccessories()}
                <Arrow direction="bottomright" onClick={() => handleClick("bottomright")}>
                    <ArrowRightOutlined />
                </Arrow>
            </SliderContainer>

        </Container>
    )
} 

export default ProductListSlider