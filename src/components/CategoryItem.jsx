import  styled  from "styled-components"
import  { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 12px;
    height: 70vh;
    position: relative;
    background-color: black;  
    overflow: hidden;

    &:hover{
      & .background-image{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      overflow: hidden;
    }
    }
`;


const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh"})}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
   color: white;
   margin-bottom: 20px;
   opacity: 0.9;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: teal;
    color: white;
  }
`; 

const CategoryItem = ({item}) => {
  return (
    <Container>
       <Image src={item.img}  className='background-image'/>
       <Info>
             <Title>{ item.title}</Title>
             <Button>BUY NOW</Button>
       </Info>
    </Container>
  )
}

export default CategoryItem