import React, {useEffect, useState} from 'react';

import './Offer.scss';
import {Button} from "antd";

function Offer() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const finish = new Date();
    finish.setDate(14);
    finish.setMonth(4);
    finish.setHours(0);
    finish.setMinutes(0);
    finish.setSeconds(0);

    const [timeRemaining, setTimeRemaining] = useState(finish.getTime() - Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => {
                const newTimeRemaining = finish.getTime() - Date.now();
                if (newTimeRemaining <= 0) {
                    clearInterval(intervalId);
                    return 0;
                } else {
                    return newTimeRemaining;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [finish]);

    const days = Math.max(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
    const minutes = Math.max(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)), 0);
    const seconds = Math.max(Math.floor((timeRemaining % (1000 * 60)) / 1000), 0);

    return (
        <div className="offer py-20 mt-0 lg:mt-20">
            <div className="flex flex-wrap h-full">
                <div className="w-6/12 lg:w-7/12">
                </div>

                <div className="w-6/12 lg:w-5/12 flex flex-wrap items-center content-center px-0 lg:px-10">
                    <p className="title dancing-script">White Valentine 14/03</p>
                    <p className="sub-title mb-3">Giảm giá 35% cho các sản phẩm được chọn</p>
                    <p className="hidden lg:block text-lg">
                        Nhân dịp "White Valentine" sắp tới. Chúng tôi xin gửi đến quý khách chương trình ưu đãi đặc
                        biệt: Giảm giá 35%
                        cho các sản phẩm được chọn tại spa. Đây là cơ hội tuyệt vời để trải nghiệm các dịch vụ
                        chăm sóc da và cơ thể cao cấp, được thiết kế đặc biệt để mang lại cảm giác thư thái và
                        làm mới toàn diện cho cơ thể và tinh thần của bạn.
                        <br/>
                        <br/>
                    </p>
                    <p className="text-sm lg:text-lg">Thời hạn ưu đãi :</p>
                    <div className="w-full flex space-x-3 mt-4">
                        <div className="w-2/12 lg:w-2/12 p-1 lg:p-5 flex justify-center items-center box">
                            <p className="text-xs lg:text-xl text-center">
                                {days}
                                <br/>
                                Ngày
                            </p>
                        </div>
                        <div className="w-2/12 lg:w-2/12 p-1 lg:p-5 flex justify-center items-center box">
                            <p className="text-xs lg:text-xl text-center">
                                {hours}
                                <br/>
                                Giờ
                            </p>
                        </div>
                        <div className="w-2/12 lg:w-2/12 p-1 lg:p-5 flex justify-center items-center box">
                            <p className="text-xs lg:text-xl text-center">
                                {minutes}
                                <br/>
                                Phút
                            </p>
                        </div>
                        <div className="w-2/12 lg:w-2/12 p-1 lg:p-5 flex justify-center items-center box">
                            <p className="text-xs lg:text-xl text-center">
                                {seconds}
                                <br/>
                                Giây
                            </p>
                        </div>
                    </div>
                    <Button href="/services" className="button-primary mt-5">XEM NGAY</Button>
                </div>
            </div>
        </div>
    );
}

export default Offer;