import React from 'react';

import './GridProducts.scss';
import {Rate} from "antd";
import {Link} from "react-router-dom";

// prototype: <GridProducts data: object, size: small />
function GridProducts({data, size}) {
    return (
        <div className="grid-products w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            {
                data && data.map((element, index) => {
                    return (
                        <div key={index} className="box">
                            <Link to="/services">
                                <div className={size === "small" ? "image-box small flex justify-center" : "image-box"}>
                                    <img className="h-full object-cover"
                                         src={require(`../../assets/images/${element["image"]}`)} alt="Sản Phẩm"/>
                                </div>
                                <div className="info flex flex-wrap justify-center">
                                    <p className="text-center text-base lg:text-xl w-full product-name">{element["name"]}</p>
                                    <Rate disabled value={element["star"]}/>
                                    <p className="w-full text-center text-xs lg:text-base">
                                    <span
                                        className="line-through color-line-through roboto">{element["originalPrice"].toLocaleString()} VND
                                    </span>
                                        <span className="roboto px-1"> - </span>
                                        <span className="roboto">{element["actualPrice"].toLocaleString()} VND</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GridProducts;