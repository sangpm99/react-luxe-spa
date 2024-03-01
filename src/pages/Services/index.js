import React, {useEffect, useState} from 'react';

import './Services.scss';
import PageDefault from "../../components/PageDefault";
import BreadCrumb from "../../components/BreadCrumb";
import source from '~/data/db.json';
import GridProducts from "../../components/GridProducts";

function Services() {
    const [active, setActive] = useState(1);
    const [categories, setCategories] = useState(null);
    const [massages, setMassages] = useState(null);
    const [treatments, setTreatments] = useState(null);
    const [products, setProducts] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setCategories(source["categories"]);
        setMassages(source["massages"]);
        setTreatments(source["treatments"]);
        setProducts(source["products"]);
        setData(source["massages"]);
    }, []);

    const handleMenu = (id) => {
        setActive(id);
        switch (id) {
            case 1: {
                setData(massages);
                break;
            }
            case 2: {
                setData(treatments);
                break;
            }
            case 3: {
                setData(products);
                break;
            }
            default: {
                console.log("Error id");
                break;
            }
        }
    }

    return (
        <PageDefault>
            <BreadCrumb title="Dịch Vụ" />
            <div className="services p-3 lg:p-10">
                <div className="flex flex-wrap lg:flex-nowrap gap-10 relative">
                    <div className="w-full lg:w-1/4 sticky top-0 z-20 bg-white">
                        <p className="text-lg lg:text-4xl border-b title">Danh Mục</p>
                        <ul>
                            {
                                categories && categories.map((element, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={element.id === active ? "text-sm lg:text-lg px-5 py-2 cursor-pointer active" : "text-sm lg:text-lg px-5 py-2 cursor-pointer"}
                                            onClick={() => handleMenu(element.id)}
                                        >
                                            <p>{element.name}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-full lg:w-3/4 relative z-10">
                        <GridProducts data={data} size="small"/>
                    </div>
                </div>
            </div>
        </PageDefault>
    );
}

export default Services;