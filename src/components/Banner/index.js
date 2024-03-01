import React from 'react';
import { BiLeaf } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { TbVaccineBottleOff } from "react-icons/tb";
import { LuArrowRight } from "react-icons/lu";
import {Button} from "antd";

import './Banner.scss';

function Banner() {
    return (
        <div className="banner relative">
            <img className="w-full h-80 lg:h-auto object-cover" src={require("~/assets/images/banner.png")} alt="Banner"/>
            <div className="text-box absolute">
                <p className="title">Vẻ đẹp không tì vết</p>
                <p className="sub-title">Cho làn da trắng sáng tự nhiên</p>
                <div className="flex mt-5">
                    <div className="w-3/12 flex flex-wrap content-start icon-box me-1 lg:me-3">
                        <div className="w-full flex justify-center relative">
                            <BiLeaf className="text-sm lg:text-4xl my-icon" />
                        </div>
                        <div className="w-full text-center mt-3 lg:mt-10">
                            <p className="text-normal mt-3">Sản phẩm thiên nhiên</p>
                        </div>
                    </div>

                    <div className="w-3/12 flex flex-wrap content-start icon-box me-1 lg:me-3">
                        <div className="w-full flex justify-center relative">
                            <FiHeart className="text-sm lg:text-4xl my-icon" />
                        </div>
                        <div className="w-full text-center mt-3 lg:mt-10">
                            <p className="text-normal mt-3">Phục vụ tận tình</p>
                        </div>
                    </div>

                    <div className="w-3/12 flex flex-wrap content-start icon-box me-1 lg:me-3">
                        <div className="w-full flex justify-center relative">
                            <TbVaccineBottleOff className="text-sm lg:text-4xl my-icon" />
                        </div>
                        <div className="w-full text-center mt-3 lg:mt-10">
                            <p className="text-normal mt-3">Không chứa Paraben</p>
                        </div>
                    </div>
                </div>

                <div className="w-4/12 h-6">
                    <Button href="/services" className="my-button h-full button-outline mt-5 lg:mt-10 button-icon text-normal">
                        <span>XEM NGAY</span>
                        <span><LuArrowRight /></span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Banner;