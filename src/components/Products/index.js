import React, {useEffect, useState} from 'react';

import productsData from '~/data/db.json';
import GridProducts from "../GridProducts";


function Products() {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(productsData["products"])
    }, []);
    return (
        <div className="bg-skin p-body py-20">
            <div className="space hidden lg:block"></div>
            <p className="text-center text-xl lg:text-4xl font-bold">Sản Phẩm Thảo Dược</p>
            <p className="text-center text-base lg:text-xl mt-2 mb-5 lg:mb-20">
                <span>Những sản phẩm thảo dược hoàn toàn được chiết xuất từ thiên nhiên, thân thiện với làn da </span>
                <br className="hidden lg:block"/>
                <span>và không gây kích ứng, hiệu quả & lành tính</span>
            </p>

            <GridProducts data={data} />
        </div>
    );
}

export default Products;