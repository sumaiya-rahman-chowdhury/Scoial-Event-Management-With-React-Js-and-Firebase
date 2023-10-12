import { useLoaderData } from "react-router-dom";
import Card from "./Card";
const Services = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div className=" my-10 font-poppins max-w-[1180px] mx-auto"   data-aos="fade-up" data-aos-duration="3000">
            <h1 className=" lg:text-5xl md:text-3xl text-xl text-center font-semibold">Our Services</h1>
            <div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7  mt-7">
                        {
                            data.map(card=><Card key={card.id} card={card}></Card>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Services;