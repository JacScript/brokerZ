import React from 'react';
import styled from 'styled-components';
import Announcement from '../../components/announcement-component/Announcement';
import Footer from "../../components/Footer";
import NavBar from '../../components/navbar-component/NavBar';
import Newsletter from '../../components/Newsletter';
import ProductCollectionPreview from '../../components/product-collection-preview/ProductCollectionPreview'
import { ProductData } from '../../data';

const ProductList2 = () => {


const ProductListContainer = styled.div`
`;
 const collections = ProductData;
  return (
    <ProductListContainer>
      <NavBar />
      {/* <Announcement /> */}
     { collections.map(({id, ...otherCollectionProps}) => (
       <ProductCollectionPreview key={id} {...otherCollectionProps} />
     )) 
     }
     <Newsletter />
     <Footer />
    </ProductListContainer>
  )
}

export default ProductList2