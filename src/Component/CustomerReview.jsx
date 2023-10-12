import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const CustomerReview = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(reviews => setData(reviews))
    }, [])
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className="my-24 max-w-[1180px] mx-auto ">
            <h1 className=" text-3xl text-center">What our Custormer Says:</h1>
            <Marquee pauseOnHover>
            <div className=" my-10 flex overflow-hidden ">
            {
                data.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
            }
        </div>
        </Marquee>

        </div>
    );
};

export default CustomerReview;