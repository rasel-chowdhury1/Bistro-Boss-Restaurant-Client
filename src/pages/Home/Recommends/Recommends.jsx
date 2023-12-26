import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';

const Recommends = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <SectionTitle
              subHeading={"Should Try"}
              heading={"chef recommends"}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4'>
                <div className="card  glass">
                    <figure>
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg" alt="car!"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl justify-center">Caeser Salad</h2>
                        <p className='text-xl justify-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline bg-black border-0 border-b-4 mt-4 text-yellow-600 py-4 px-6 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass">
                    <figure>
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg" alt="car!"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl justify-center">Caeser Salad</h2>
                        <p className='text-xl justify-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-600 py-4 px-6 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card glass">
                    <figure>
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-4-370x247.jpg" alt="car!"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl justify-center">Caeser Salad</h2>
                        <p className='text-xl justify-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline bg-black border-0 border-b-4 mt-4 text-yellow-600 py-4 px-6 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;