import { useLoaderData, useParams } from "react-router-dom";
import { BiCartDownload } from 'react-icons/bi';
import swal from "sweetalert";
const CardsDetails = () => {

    const data = useLoaderData()
    console.log(data)

    const id = useParams()
    console.log(id)
    const newData = data.find(detail => detail.id == id.id)
    // console.log(newData)

    const addToCart = () =>{
        const selectedArray = []
        const selectedItems = JSON.parse(localStorage.getItem('selected'))

        if(!selectedItems){
        selectedArray.push(newData)
        localStorage.setItem('selected',JSON.stringify(selectedArray))
        }
        else{
            selectedArray.push(...selectedItems,newData)
            localStorage.setItem('selected',JSON.stringify(selectedArray))
        }
        swal('Add to Cart Succesfully')

    }
    return (
        <div className=" h-screen flex items-center">
            <div className=" flex  lg:flex-row flex-col items-center">
                <div className=" mt-[203px] lg:mt-2">
                    <img
                        src={newData.image}
                        alt="image"
                        className="h-full w-full "
                    />
                </div>
                <div className="p-6 space-y-2">

                    <h4 className="mb-2 block lg:text-3xl  text-2xl font-semibold   text-blue-gray-900 antialiased">
                        {newData.serviceName} 
                    </h4>  
                    <p>Add this service to your Cart <BiCartDownload className=" text-3xl bg-amber-600  shadow-lg" onClick={addToCart}></BiCartDownload></p>
                    <p className=" block  text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {newData.description
                        }
                    </p>
                    <p className=" font-bold"> Price :  {newData.priceRange
                    }</p>
                    <p className=" font-bold">Contact Us: </p>
                    <div>
                    <p className=" text-[14px]">contact Email : {newData.contactEmail
                    }</p>
                    <p className=" text-[14px] mb-8">contact website : {newData.website
                    }</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardsDetails;