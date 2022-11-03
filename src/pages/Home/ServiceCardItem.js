import React from 'react';

const ServiceCardItem = ({ img, title, description }) => {
    return (
        <div className="card rounded-lg shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-md'>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCardItem;