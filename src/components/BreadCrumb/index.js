import React from 'react';

function BreadCrumb({title}) {
    return (
        <div className="relative h-20 lg:h-60 overflow-hidden">
            <img className="w-full h-full object-cover opacity-20" src={require("~/assets/images/BreadCrumb.png")} alt="Bread Crumb"/>
            <p
                className="absolute text-lg lg:text-4xl top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                {title}
            </p>
        </div>
    );
}

export default BreadCrumb;