import React from 'react';
import PageDefault from "../../components/PageDefault";
import WhyUs from "../../components/WhyUs";
import BreadCrumb from "../../components/BreadCrumb";
import Gallery from "../../components/Gallery";

function About() {
    return (
        <PageDefault>
            <BreadCrumb title="Giới Thiệu" />
            <WhyUs />
            <div className="space"></div>
            <Gallery />
        </PageDefault>
    );
}

export default About;