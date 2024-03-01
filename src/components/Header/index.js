import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Drawer, Button} from "antd";
import {FaBars} from "react-icons/fa";
import {RiLeafFill} from "react-icons/ri";

import './Header.scss';
import source from '~/data/db.json';

const list = [
    {
        "id": 1,
        "label": "Trang Chủ",
        "link": "/",
        "name": "home",
    },
    {
        "id": 2,
        "label": "Giới Thiệu",
        "link": "/about",
        "name": "about",
    },
    {
        "id": 3,
        "label": "Dịch Vụ",
        "link": "/services",
        "name": "services",
    },
    {
        "id": 4,
        "label": "Liên Hệ",
        "link": "/contact",
        "name": "contact",
    },
]

function Header() {
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);

    const currentURL = window.location.href;
    const arr = currentURL.split("/");

    useEffect(() => {
        switch (arr[arr.length - 1]) {
            case "about": {
                setActive(2);
                break;
            }
            case "services": {
                setActive(3);
                break;
            }
            case "contact": {
                setActive(4);
                break;
            }
            default: {
                setActive(1);
                break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="header flex items-center relative">

            {/* Start Bar */}
            <Drawer title="LUXE SPA" onClose={onClose} open={open}>
                {/* Start Only for PC*/}
                <div className="hidden lg:block">
                    <p className="text-4xl border-b pb-2 color-secondary border-green-700">
                        <Link className="link-secondary" to="/services">
                            Massage
                        </Link>
                    </p>
                    <ul className="my-2">
                        {
                            source && source["massages"].map((element, index) => {
                                return (
                                    <li key={index} className="text-lg">
                                        <Link className="link-secondary flex items-center" to="/services">
                                            <RiLeafFill className="color-secondary me-2" />
                                            {element["name"]}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <p className="text-4xl border-b pb-2 color-secondary border-green-700 mt-2">
                        <Link to="/services" className="link-secondary">
                            Liệu Trình
                        </Link>
                    </p>
                    <ul className="my-2">
                        {
                            source && source["treatments"].map((element, index) => {
                                return (
                                    <li key={index} className="text-lg">
                                        <Link to="/services" className="link-secondary flex items-center">
                                            <RiLeafFill className="color-secondary me-2" />
                                            {element["name"]}
                                        </Link>
                                    </li>

                                )
                            })
                        }
                    </ul>

                    <p className="text-4xl border-b pb-2 color-secondary border-green-700 mt-2">
                        <Link to="/services" className="link-secondary">
                            Sản Phẩm
                        </Link>
                    </p>
                    <ul className="my-2">
                        {
                            source && source["products"].map((element, index) => {
                                return (
                                    <li key={index} className="text-lg">
                                        <Link to="/services" className="link-secondary flex items-center">
                                            <RiLeafFill className="color-secondary me-2" />
                                            {element["name"]}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <p className="text-4xl border-b pb-2 color-secondary border-green-700 mt-2">
                        <Link to="/contact" className="link-secondary">
                            Liên Hệ
                        </Link>
                    </p>
                    <ul className="my-2">
                        <li className="flex items-center text-lg">
                            <p><b>Địa Chỉ: </b>Số 30 Ng. 304 Đ. Hồ Tùng Mậu, Cầu Diễn, Nam Từ Liêm, Hà Nội</p>
                        </li>

                        <li className="flex items-center text-lg">
                            <p><b>Điện Thoại: </b>0987654321</p>
                        </li>

                        <li className="flex items-center text-lg">
                            <p><b>Email: </b>luxespa@gmail.com</p>
                        </li>
                    </ul>
                </div>
                {/* End only for PC */}

                {/* Start Menu for Mobile*/}
                <div className="block lg:hidden">
                    <ul className="navbar m-0">
                        {
                            list.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            active === item.id ? "mx-2 text-xl border-b active py-3" : "mx-2 text-xl border-b py-3"
                                        }
                                    >
                                        <Link className="link-primary" to={item.link}>{item.label}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* End Menu for Mobile*/}
            </Drawer>
            {/* End Bar */}

            {/* Start Header */}
            <div className="w-full flex items-center relative justify-between lg:justify-starts p-body">
                <div className="hidden lg:block w-5/12">
                    <ul className="flex navbar">
                        {
                            list.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            active === item.id ? "mx-2 text-xl active" : "mx-2 text-xl"
                                        }
                                    >
                                        <Link to={item.link}>{item.label}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="w-2/12 flex justify-center">
                    <div className="logo flex items-center">
                        <Link to="/">
                            <img src={require('~/assets/images/logo.png')} alt="Logo"/>
                        </Link>
                    </div>
                </div>
                <div className="w-5/12 flex justify-end items-center p-body lg:p-0">
                    <div className="h-6 lg:h-10 me-2 lg:me-5">
                        <Button href="/services" className="w-full h-full button-primary flex justify-center items-center text-normal">
                        <span>
                            Tìm Ưu Đãi
                        </span>
                        </Button>
                    </div>

                    <div className="h-6 lg:h-10 w-6 lg:w-auto">
                        <Button className="w-full h-full button-primary-outline text-normal flex justify-center items-center" onClick={showDrawer}>
                         <span className="text-sm lg:text-lg">
                            <FaBars/>
                        </span>
                        </Button>
                    </div>
                </div>
            </div>
            {/* End Header */}
        </div>
    );
}

export default Header;