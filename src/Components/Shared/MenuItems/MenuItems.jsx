import React from 'react';
import '../../Global/Style.css'

const MenuItems = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className='flex space-x-3'>
            <img className='w-[100px] h-auto img' src={image} alt="" />
            <div>
                <h3 className='text-[22px] font-serif font-light'>{name}--------------</h3>
                <p className='text-base'>{recipe}</p>
            </div>
            <p className='text-[#D99904] text-[20px]'>${price}</p>
        </div>
    );
};

export default MenuItems;