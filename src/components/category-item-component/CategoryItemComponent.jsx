import  styled  from "styled-components"
import  { mobile } from "../../responsive";

const Container = styled.div`
    width: 22vw;
    display : flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    margin: 5px;
    overflow: hidden;
    
    &:hover{
      & .background-image{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      // overflow: hidden;
      // cursor: pointer;
    }
    }
`;

const CategoryContainer = styled.div`
    position: relative; 
    width: 100%;
    height: 100%;
     
`;
const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  object-position: center;
    position: absolute; 
    margin: 5px;

   

  // width: 120px;
  // height: 95%;
  // ${mobile({ height: "30vh"})}
}
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
  margin: 20px;

  &:hover {
    background-color: teal;
    color: white;
  }
`; 

const CategoryItem = ({id, imageUrl,name}) => {
  return (
    <Container>
       <CategoryContainer> 
       <Image src={imageUrl} className="background-image"/>
       <Info>
             <Button>VIEW MORE</Button>
             <Button>BUY NOW</Button>
       </Info>
       </CategoryContainer>
    </Container>
  )
}

export default CategoryItem