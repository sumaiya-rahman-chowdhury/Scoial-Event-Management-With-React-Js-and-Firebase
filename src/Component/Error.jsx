import { Link } from "react-router-dom";
'use client';

import { Button } from 'flowbite-react';
const Error = () => {
    return (
        <div className=" flex justify-center h-screen items-center font-poppins ">
            <div>
                <h1 className="font-bold lg:text-5xl text-xl text-center md:text-4xl mb-5">Opps,Sorry Page Not Found</h1>
                <div className="flex justify-center  mb-5">
                    <img src="https://i.ibb.co/zVjtczy/NINTCHDBPICT000633088563.jpg" alt="" className="  h-[400px]" />
                   
                </div>
                <div  className="flex justify-center">
                    <Link to='/'> <Button color="warning">
                        Go Back To Home
                    </Button></Link>
                    </div>

            </div>
        </div>
    );
};

export default Error;