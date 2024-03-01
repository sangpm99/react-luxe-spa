import React from 'react';
import { Image } from 'antd';

const data = [
    {
        "id": 1,
        "image": "gallery-1.jpg"
    },
    {
        "id": 2,
        "image": "gallery-2.jpg"
    },
    {
        "id": 3,
        "image": "gallery-3.jpg"
    },
    {
        "id": 4,
        "image": "gallery-4.jpg"
    },
    {
        "id": 5,
        "image": "gallery-5.jpg"
    },
    {
        "id": 6,
        "image": "gallery-6.jpg"
    },
]

function Gallery() {
    return (
        <div className="gallery flex">
            {
                data.map((element, index) => {
                    return (
                        <div key={index} className="w-1/6">
                            <Image
                                src={require(`../../assets/images/${element.image}`)}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Gallery;