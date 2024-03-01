import React from 'react';

import { RiFacebookLine } from "react-icons/ri";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiYoutubeLogoThin, PiCertificate } from "react-icons/pi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { Button, Form, Input } from 'antd';
import {Link} from "react-router-dom";


import './Footer.scss';

function Footer() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="footer px-3 lg:px-10 mt-10">
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-20 mb-5">
                <div className="col-span-2 lg:col-span-1">
                    <div className="title pb-1 mb-3">
                        <p className="text-xl">LUXE SPA</p>
                    </div>

                    <p className="text-lg">
                        Luxe Spa - Trung tâm chăm sóc sức khỏe hàng đầu. Cam kết dịch vụ chất lượng cao, giá cả
                        phải chăng, đội ngũ tư vấn tâm huyết, sản phẩm thiên nhiên
                    </p>

                    <div className="w-1/4 mt-4">
                        <img src={require("~/assets/images/logo.png")} alt="logo"/>
                    </div>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <div className="title pb-1 mb-3">
                        <p className="text-xl">LIÊN HỆ</p>
                    </div>

                    <p className="text-lg">
                        <strong>Địa Chỉ: </strong>
                        Số 30 Ng. 304 Đ. Hồ Tùng Mậu, Cầu Diễn, Nam Từ Liêm, Hà Nội
                    </p>
                    <p className="text-lg">
                        <strong>Điện Thoại: </strong>
                        0987654321
                    </p>
                    <p className="text-lg">
                        <strong>Email: </strong>
                        luxespa@gmail.com
                    </p>
                    <div className="mt-2">
                        <ul className="flex items-center">
                            <li className="me-3">
                                <Link to="https://facebook.com">
                                    <RiFacebookLine className="icon"/>
                                </Link>
                            </li>
                            <li className="me-3">
                                <Link to="https://instagram.com">
                                    <PiInstagramLogoThin className="icon"/>
                                </Link>
                            </li>
                            <li className="me-3">
                                <Link to="https://youtube.com">
                                    <PiYoutubeLogoThin className="icon"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-4 lg:col-span-1">
                    <div className="title pb-1 mb-3">
                        <p className="text-xl">ĐĂNG KÝ NHẬN TIN</p>
                    </div>

                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy điền email!',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập Email" />
                        </Form.Item>

                        <Form.Item>
                            <Button className="button-primary" type="primary" htmlType="submit">
                                Đăng Ký
                            </Button>
                        </Form.Item>
                    </Form>

                    <p className="dancing-script text-xl">Lựa chọn của bạn là niềm vinh hạnh của chúng tôi!</p>
                    <ul className="flex mt-4">
                        <li className="me-10">
                            <PiCertificate className="icon-2"/>
                        </li>

                        <li className="me-10">
                            <MdOutlineHealthAndSafety className="icon-2"/>
                        </li>

                        <li className="me-10">
                            <TfiHeadphoneAlt className="icon-2"/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap copyright justify-center lg:justify-between py-5 text-lg">
                <p>Bản quyền thuộc về Luxe Spa © 2024</p>
                <div>
                    <Link className="link-secondary" to="/">Chính sách bảo mật</Link>
                    <span className="mx-5">|</span>
                    <Link className="link-secondary" to="/">Chính sách Cookie</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;