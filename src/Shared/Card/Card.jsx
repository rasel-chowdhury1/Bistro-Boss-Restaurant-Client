import React from 'react';

const Card = ({data,btn}) => {
    return (
        <div className="card  glass">
            <figure>
                <img src={data.image} alt="car!"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl justify-center">{data.name}</h2>
                <p className='text-xl justify-center'>{data.recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-black border-0 border-b-4 mt-4 text-yellow-600 py-4 px-6 uppercase">{btn}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;