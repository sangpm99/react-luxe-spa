import React from 'react';

import './AboutUs.scss';
import {Link} from "react-router-dom";

function AboutUs() {
    return (
        <div className="about-us p-body">
            <div className="flex flex-wrap py-0 lg:py-20">
                <div className="w-full lg:w-6/12">
                    <img className="w-full" src={require("~/assets/images/picture-1.png")} alt="about us"/>
                </div>
                <div className="w-full lg:w-5/12 flex flex-wrap items-center mx-5">
                    <p>
                        <span className="text-xl lg:text-4xl title">Dịch Vụ Làm Đẹp </span>
                        <br className="hidden lg:block"/>
                        <span className="text-xl lg:text-4xl title">Của Chúng Tôi</span>
                        <br/>
                        <br/>
                        <p className="sub-text text-lg text-justify">
                            Tại spa của chúng tôi, chúng tôi tự tin rằng sẽ mang đến không gian thoải mái và đầy thư
                            giãn.Với đội ngũ chuyên nghiệp và sự kết hợp với các phương pháp liệu trình
                            chăm sóc da bài bản sẽ giúp bạn cảm thấy thư thái, xua tan đi những
                            căng thẳng và mệt mỏi. Chúng tôi cam kết cung cấp dịch vụ chất lượng, để bạn
                            có thể tận hưởng những phút giây thư giãn và giúp bạn tìm lại vẻ thanh xuân.
                        </p>
                        <Link to="/about">[Đọc Thêm]</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;