import Catagorgy from "./Catagorgy";
import { useState } from "react";
import TeamIntroduction from "./TeamIntroduction";

const About = () => {
    const [data,setData] = useState([]) 

    fetch('/cat.json')
    .then(res=>res.json())
    .then(nowData=>setData(nowData))

    // console.log(data)

    return (
        <div className=" py-20 max-w-[1180px] mx-auto space-y-10"   data-aos="fade-up" data-aos-duration="2000">
            <div className=" space-y-3" >
            <h1 className=" lg:text-5xl md:text-3xl text-xl text-center ">About Us</h1>
            </div>
            <div >
            <p className=" text-center text-gray-700 text-3xl max-w-lg mx-auto">The Story of Dream Day Planners Crafting Moments, Creating Memories</p>
            </div>
            <div className=" flex justify-center ga-4">           
            <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
                {
                    data.map(cat=> <Catagorgy key={cat.id} cat={cat}></Catagorgy>)
                }
            </div>
            </div>
            <TeamIntroduction></TeamIntroduction>
            <div>              
            </div>
        </div>
    );
};

export default About;