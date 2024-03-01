import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";

import './Arrivals.scss';

function Arrivals() {
    return (
        <div className="arrivals py-24 p-body">
            <div className="flex">
                <div className="w-6/12 image-box">
                    <img className="w-full h-full object-cover" src={require("~/assets/images/picture-4.png")} alt="Điểm đến mới"/>
                    <div className="floor-box"></div>
                    <div className="text-box">
                        <p className="text-center">
                            <p className="title">ĐIỂM ĐẾN MỚI</p>
                            <Link className="sub-title" to="/services">Bộ Sưu Tập</Link>
                        </p>
                    </div>
                </div>
                <div className="w-5/12 ms-5">
                    <img src={require("~/assets/images/picture-5.png")} alt="Điểm đến mới"/>
                    <div className="text-box">
                        <p className="text-center mt-5">
                            <p className="text-lg lg:text-4xl mb-3">LIỆU TRÌNH MỚI</p>
                            <Link className="flex justify-center items-center" to="/services">
                                <span className="text-sm lg:text-2xl me-2">Xem Ngay</span>
                                <FaArrowRightLong />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Arrivals;