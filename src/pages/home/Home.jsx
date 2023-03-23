import React from 'react';
import Announcement from '../../components/announcement-component/Announcement';
import Categories from '../../components/Categories';
import NavBar from '../../components/navbar-component/NavBar';
import Slider from '../../components/Slider';
import Products from '../../components/Products';
import Newsletter from '../../components/Newsletter';
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <div>
      {/* <Announcement/> */}
       <NavBar/>
       <Slider/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </div>
  );
};

export default Home;