import React from 'react';

const Single = (props) => {
    let { strArea, strCategory, strMealThumb, strMeal } = props.let


    return (
        <div className=''>
            <div className='w-[400px] rounded-lg shadow-xl ml-5 p-3 h-[600px]'>
                <div>
                    <img className='rounded-lg' src={strMealThumb} alt="" />
                </div>
                <div className='ml-5 mt-5'>
                    <h1 className='pt-3 text-lg font-bold'><span className='text-orange-500'>strArea :</span> {strArea}</h1>
                    <h1 className='pt-3 text-lg font-bold'><span className='text-orange-500'>strCategory:</span> {strCategory}</h1>
                    <h1 className='pt-3 text-lg font-bold'><span className='text-orange-500'> strMeal :</span> {strMeal}</h1>
                </div>
                <div className='mt-5 ml-5'>
                    <button className='border-b-2'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Single;