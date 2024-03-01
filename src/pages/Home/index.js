import React from 'react';
import PageDefault from "../../components/PageDefault";
import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";
import Arrivals from "../../components/Arrivals";
import MassageAndTreatments from "../../components/MassageAndTreatments";
import Offer from "../../components/Offer";
import Products from "../../components/Products";
import WhyUs from "../../components/WhyUs";

function Home() {
    return (
        <PageDefault>
            <div className="home">
                <Banner />
                <AboutUs />
                <Arrivals />
                <MassageAndTreatments />
                <Offer />
                <Products />
                <WhyUs />
            </div>
        </PageDefault>
    );
}

export default Home;