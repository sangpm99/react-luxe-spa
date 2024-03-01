import React from 'react';
import {Button} from "antd";

import './MassageAndTreatments.scss';
import {Link} from "react-router-dom";

function MassageAndTreatments() {
    return (
        <div className="massage-and-treatments px-3 lg:px-10 pt-20 pb-0">
            <div className="space hidden lg:block"></div>
            <p className="text-center text-xl lg:text-4xl font-bold">Massage Và Liệu Trình</p>
            <p className="text-center text-base lg:text-xl mt-2">Tổng hợp những phương pháp massage và liệu trình tốt nhất hiện nay</p>
            <div className="space hidden lg:block"></div>

            <div className="mt-10 grid grid-cols-12 gap-5">
                <div className="col-span-6 lg:col-span-4 image-box">
                    <Link to="/services" >
                        <div className="image overflow-hidden">
                            <img src={require("~/assets/images/massage-1.jpg")} alt="Massage" />
                        </div>
                    </Link>
                </div>

                <div className="col-span-6 lg:col-span-3 image-box">
                    <Link to="/services" >
                        <div className="image overflow-hidden">
                            <img src={require("~/assets/images/massage-2.jpg")} alt="Massage" />
                        </div>
                    </Link>
                </div>

                <div className="col-span-6 lg:col-span-5 image-box">
                    <Link to="/services" >
                        <div className="image overflow-hidden">
                            <img src={require("~/assets/images/massage-3.jpg")} alt="Massage" />
                        </div>
                    </Link>
                </div>

                <div className="col-span-6 lg:col-span-5 image-box">
                    <Link to="/services" >
                        <div className="image overflow-hidden">
                            <img src={require("~/assets/images/massage-4.jpg")} alt="Massage" />
                        </div>
                    </Link>
                </div>

                <div className="col-span-6 lg:col-span-4 image-box">
                    <Link to="/services" >
                        <div className="image overflow-hidden">
                            <img src={require("~/assets/images/massage-5.jpg")} alt="Massage" />
                        </div>
                    </Link>
                </div>

                <div className="col-span-6 lg:col-span-3 image-box">
                    <Link to="/services" >
                        <div className="image overflow-hidden">
                            <img src={require("~/assets/images/massage-6.jpg")} alt="Massage" />
                        </div>
                    </Link>
                </div>

            </div>


            <div className="w-full flex justify-center my-10">
                <Button href="/services" size="large" className="button-dark rounded-3xl px-10 py-5 flex items-center">XEM TẤT CẢ</Button>
            </div>
            <div className="space"></div>
        </div>
    );
}

export default MassageAndTreatments;