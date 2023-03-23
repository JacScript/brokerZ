import React from 'react';
import styled from "styled-components";
import Announcement from '../components/announcement-component/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from "../components/Footer";
import NavBar from '../components/navbar-component/NavBar';

import { ItemData } from '../data';

import CollectionItemPreview from '../components/collection-preview/announcement-component/ItemCollectionPreview';

const ProductContainer = styled.div`
`;

const ProductListContainer = styled.div`
`;

const  ItemList = () => {
     
    const collections = ItemData;
    return (
    <ProductContainer>
        <NavBar/>
        <Announcement/>
        {/* <ProductListContainer > */}
        {collections.map(({ id, ...otherCollectionProps}) => (
             <CollectionItemPreview key={id} {...otherCollectionProps} />
           ))}
        {/* </ProductListContainer> */}
        <Newsletter/>
        <Footer/>
    </ProductContainer>
)
        }

export default ItemList;