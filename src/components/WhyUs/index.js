import React from 'react';
import { RiLeafFill } from "react-icons/ri";
import { FaStar, FaPlus } from "react-icons/fa";

import './WhyUs.scss';
import {Button} from "antd";

function WhyUs() {
    return (
        <div className="why-us">
            <div className="flex flex-wrap lg:flex-nowrap w-full px-3 lg:px-10 pt-20">
                <div className="w-full lg:w-1/2 image-box image-box-left">
                    <img className="w-full h-auto lg:h-full object-cover" src={require("~/assets/images/welcome-img-1.jpg")} alt="Why Us"/>
                </div>
                <div className="w-full lg:w-1/2 text-box ms-0 lg:ms-20 mt-5 lg:mt-0">
                    <p className="text-xl italic">Spa Chăm Sóc Sức Khỏe</p>
                    <p className="color-secondary title dancing-script">Làm mới toàn diện cho cơ thể</p>
                    <p className="text-lg py-2 lg:py-5">
                        Bạn tìm kiếm sự chăm sóc cho cơ thể sau chuỗi ngày làm việc mệt mỏi, hãy đến với chúng tôi
                        . Tại đây, Luxe Spa không chỉ là nơi thư giãn mà còn cải thiện sức khỏe cùng với các phương
                        pháp và liệu trình massage để bạn có thể tận hưởng phút giây thư thái và tái tạo năng lượng
                    </p>

                    <div className="w-full mt-0 lg:mt-5 flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <ul>
                                <li className="flex items-center text-lg">
                                    <RiLeafFill className="color-secondary me-2" />
                                    Chất lượng hàng đầu
                                </li>

                                <li className="flex items-center text-lg">
                                    <RiLeafFill className="color-secondary me-2" />
                                    Giá cả phải chăng
                                </li>

                                <li className="flex items-center text-lg">
                                    <RiLeafFill className="color-secondary me-2" />
                                    Cam kết có những phút giây thư giãn
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <ul>
                                <li className="flex items-center text-lg">
                                    <RiLeafFill className="color-secondary me-2" />
                                    Phục vụ tận tình
                                </li>

                                <li className="flex items-center text-lg">
                                    <RiLeafFill className="color-secondary me-2" />
                                    Sản phẩm thiên nhiên
                                </li>

                                <li className="flex items-center text-lg">
                                    <RiLeafFill className="color-secondary me-2" />
                                    Không chứa hóa chất
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Button href="/services" className="button-secondary mt-5">XEM NGAY</Button>
                </div>
            </div>

            <div className="flex flex-wrap-reverse lg:flex-nowrap w-full mt-10 lg:mt-20 px-3 lg:px-10 mb-20">
                <div className="w-full lg:w-1/2 text-box mt-5 lg:mt-0 me-0 lg:me-20">
                    <p className="text-xl italic">Dịch Vụ Uy Tín Hàng Đầu</p>
                    <p className="color-secondary title dancing-script">Địa Điểm Chăm Sóc Sức Khỏe Hàng Đầu</p>
                    <p className="text-lg py-2 lg:py-5">
                        Với đội ngũ chuyên gia tận tâm và các liệu pháp tiên tiến, chúng tôi cam kết mang lại những
                        buổi massage hiệu quả. Chúng tôi tự hào là một trong những Spa hàng đầu, mang đến những
                        trải nghiệm hài lòng cho mỗi khách hàng
                    </p>

                    <div className="w-full mt-5 flex justify-between">
                        <div className="w-1/4">
                            <p className="flex color-secondary w-full justify-center">
                                <span className="text-4xl dancing-script me-2">4.5</span>
                                <FaStar />
                            </p>
                            <p className="color-secondary lg:text-2xl dancing-script w-full text-center mt-3">1,500 lượt bình chọn</p>
                        </div>

                        <div className="w-1/4">
                            <p className="flex color-secondary w-full justify-center">
                                <span className="text-4xl dancing-script me-2">99</span>
                                <FaPlus />
                            </p>
                            <p className="color-secondary lg:text-2xl dancing-script w-full text-center mt-3">Các loại dịch vụ và sản phẩm</p>
                        </div>

                        <div className="w-1/4 flex flex-wrap justify-center">
                            <div>
                                <img src={require("~/assets/images/client-group-images.png")} alt="review"/>
                            </div>
                            <p className="color-secondary lg:text-2xl dancing-script w-full text-center mt-3">Lượt tư vấn mỗi ngày</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 image-box image-box-right">
                    <img className="w-full h-auto lg:h-full object-cover" src={require("~/assets/images/welcome-img-2.jpg")} alt="Why Us"/>
                </div>
            </div>
            <img src={require("~/assets/images/wave.png")} alt="wave"/>
        </div>
    );
}

export default WhyUs;