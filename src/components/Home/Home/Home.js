import React from 'react';
import AutoPlayCarousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import BackToTop from '../../Utilities/BactToTop/BackToTop';


const Home = () => {
    return (
        <div className="pb-5">
            <BackToTop />
            <Navbar/>
            <HeaderCarousel/>
            <Services/>
            <ShoppingCard/>
            <AutoPlayCarousel/>
            <Footer/>
        </div>
    );
};

export default Home;