import React, { useState, useEffect } from 'react';
import Listing from './listing';
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MainComponent = () => {
    const [data, setData] = useState<any>([]);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products").then((res) =>
                res.json()
            );
            setData(res);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleMyCart = () => {
        navigate('/cart')
    }
    return (
        <div>
            <div className='flex justify-end mb-11'>
                <div className='flex items-center gap-2 bg-green-700 px-3 py-2 rounded-lg cursor-pointer' onClick={handleMyCart}>
                    <FaCartArrowDown size={25} color='white' />
                    <p className='text-white'>My cart</p>
                </div>
            </div>
            <Listing data={data} />
        </div>
    )
}

export default MainComponent;