const ReviewCard = ({review}) => {
    console.log(review)
    return (
       <div>
        <div className=" p-3 shadow-lg border-2 ml-5">
            <h1 className=" font-bold">{review.customerName}</h1>
            <p className=" text-[14px] ">{review.review.slice(0,100)}</p>
            <p className="text-[12px] font-bold">Rating: {review.rating}</p>
        </div>
       </div>
    );
};

export default ReviewCard;