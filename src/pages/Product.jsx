import styled from "styled-components";
import NavBar from '../components/navbar-component/NavBar';
import Announcement from '../components/announcement-component/Announcement';
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import pic1 from "../img/furniture1.jpg";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  object-position: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  `;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
  display: flex;
  justify-content: center;
//   background-color: black;
  margin-bottom: 20px;
`;



const DetailContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 15px;
`;


const Detail = styled.span`
   display: flex;
   align-items: center;
   margin: 10px
`;


const DetailInfo = styled.div`
  font-weight: 100;
  font-size: 40px;
  display: flex;
  justify-content: center;
  //   background-color: black;
  margin-bottom: 20px;
`;

const Details = styled.div`
  font-weight: 100;
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: teal;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
   margin: 30px 0px;
`;

const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal; 
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 20px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  width: 80%;
  border-radius: 20px;

  &:hover{
     background-color: #f8f4f4;
  }
`;



const Product = () => {
  return (
     <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
           <ImgContainer>
              <Image src={pic1}/>
           </ImgContainer>
           <InfoContainer>
           <Title>2 wooden chair and Soft table</Title>
           <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Dolores fuga repellat facilis culpa, illum et.
                Fuga, repellat accusantium at nulla veniam natus molestiae quaerat unde possimus.
                 Eveniet tempora reprehenderit temporibus.</Desc>
                 <DetailContainer>
                   <Detail>
                    <DetailInfo>Location:</DetailInfo>
                    <Details>Mbeya</Details>
                     </Detail>
                 </DetailContainer>
           <Price>12000 Tsh</Price>
           <AddContainer>
              <AmountContainer>
                 <Remove/>
                 <Amount>1</Amount>
                 <Add/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
           </AddContainer>
           </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
     </Container>
  );
};

export default Product