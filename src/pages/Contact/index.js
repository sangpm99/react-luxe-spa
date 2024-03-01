import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaMapMarkedAlt } from "react-icons/fa";

import PageDefault from "../../components/PageDefault";
import BreadCrumb from "../../components/BreadCrumb";
import Gallery from "../../components/Gallery";

function Contact() {
    return (
        <PageDefault>
            <BreadCrumb title="Liên Hệ" />
            <div className="p-3 lg:p-20 mb-5 lg:mb-0">
                <div className="flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-20 gap-3 mb-10">
                    <div
                        className="w-full lg:w-1/3 flex flex-wrap flex-col border p-10 cursor-pointer"
                        onClick={() => {window.location.href = "tel:0987654321"}}
                    >
                        <div className="flex justify-center mb-10">
                            <div className="p-5 button-primary rounded-full">
                                <FaPhoneAlt className="text-white text-xl" />
                            </div>
                        </div>
                        <p className="text-center text-4xl">Điện Thoại</p>
                        <p className="text-center text-lg mt-5">0987654321</p>
                        <p className="text-center text-lg">0123456789</p>
                    </div>

                    <div
                        className="w-full lg:w-1/3 flex flex-wrap flex-col border p-10 cursor-pointer"
                        onClick={() => window.location.href="mailto:luxespa@gmail.com"}
                    >
                        <div className="flex justify-center mb-10">
                            <div className="p-5 button-primary rounded-full">
                                <TfiEmail className="text-white text-2xl" />
                            </div>
                        </div>
                        <p className="text-center text-4xl">Email</p>
                        <p className="text-center text-lg mt-5">luxespa@gmail.com</p>
                        <p className="text-center text-lg">luxespaoffical@gmail.com</p>
                    </div>

                    <div
                        className="w-full lg:w-1/3 flex flex-wrap flex-col border p-10 cursor-pointer"
                        onClick={() => window.open("https://maps.app.goo.gl/PSZdXeQxcFphZKPeA")}
                    >
                        <div className="flex justify-center mb-10">
                            <div className="p-5 button-primary rounded-full">
                                <FaMapMarkedAlt className="text-white text-2xl" />
                            </div>
                        </div>
                        <p className="text-center text-4xl">Địa Chỉ</p>
                        <p className="text-center text-lg mt-5">
                            Số 30 Ng. 304 Đ. Hồ Tùng Mậu, Cầu Diễn, Nam Từ Liêm, Hà Nội
                        </p>
                    </div>

                </div>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.757010080174!2d105.76277877587279!3d21.042406487308554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c6c5375ad9%3A0x3e4cb136091480a1!2zMzAgTmcuIDMwNCDEkC4gSOG7kyBUw7luZyBN4bqtdSwgQ-G6p3UgRGnhu4VuLCBOYW0gVOG7qyBMacOqbSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1708932706896!5m2!1svi!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Gallery />
        </PageDefault>
    );
}

export default Contact;