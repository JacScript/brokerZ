import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { ArrowLeftOutlined , ArrowRightOutlined } from "@material-ui/icons";
import ProductListSlider from "../components/ProductListSlider";

const Container = styled.div`

`;

const Title = styled.h1`
   margin: 20px;
   display:flex;
   justify-content: center;
  //  items-align: center;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`; 

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600px;
    margin-right: 20px;
`;
   
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;


const ProductList = ({popularItems2}) => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Furniture & Electronic Accessories </Title>
        <FilterContainer>
              <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option Selected>Newest</Option>
                    <Option>Price(asc)</Option>
                    <Option>Black(desc)</Option>
                </Select>

            </Filter>
        </FilterContainer>
        <ProductListSlider/>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default ProductList