'use client';

import { Button } from 'flowbite-react';

const Banner = () => {
    return (
        <div className=' h-[500px] bg-hero-pattern flex justify-center items-center'>
              {/* <Carousel slide={false} pauseOnHover style={{ margin: "0", padding: "-30px", marginTop: "-39px",borderRadius:")0px"}}>
      <img
        alt="..."
        src="https://i.ibb.co/WpbprHZ/pexels-pham-hoang-kha-3785644.jpg" className=' rounded-none'
      />
      <img
        alt="..."
        src="https://i.ibb.co/SynjJZc/jon-tyson-CP68p1f-ZS8k-unsplash.jpg"
      />
      <img
        alt="..."
        src="https://i.ibb.co/HtmGzhQ/pexels-trung-nguyen-5096255.jpg"
      />
      <img
        alt="..."
        src="https://i.ibb.co/gjzNXn7/pexels-luis-quintero-2091331.jpg"
      />
    </Carousel> */}
    <div>
    <h1 className=' lg:text-5xl font-semibold text-center  text-3xl text-white leading-loose'>Unlock the Social Scene <br /> Your Passport to Memorable Events!</h1>
     <div className=' flex justify-center mt-5'>
     <Button
        color="warning"
        pill
      >
        <p>
         Explore More
        </p>
      </Button>
     </div>
    </div>
      
        </div>
    );
};

export default Banner;