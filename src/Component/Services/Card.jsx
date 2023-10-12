'use client';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 
'react-icons/hi';
import { Link } from 'react-router-dom';
const Card = ({ card }) => {
    return (
        <div className=" w-[350px] mx-auto shadow-lg p-5 rounded-lg space-y-2">
            <img src={card.image} alt="" className="rounded-lg" />
            <h1 className=" font-bold text-xl text-gray-700">{card.serviceName}</h1>
            <p className=" font-bold text-gray-500">Price: {card.priceRange}</p>
            <p className=" text-sm text-gray-400">{card.description.slice(0, 100)}</p>
            <Link to={`/details/${card.id}`}>   <Button className=' bg-amber-500 hover:bg-amber-300'>
                <p>
                    Details
                </p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button></Link>

        </div>
    );
};

export default Card;