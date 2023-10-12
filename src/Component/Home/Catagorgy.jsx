

const Catagorgy = ({cat}) => {
    return (
        <div>
            <div className=" shadow-lg m-5 space-y-2 text-center p-2">
                <div className=" flex justify-center">
                <img src={cat?.image} alt="" className=" w-[100px] h-[100px] rounded-full"/>
                </div>
                <h1 className=" font-bold text-[14px]">{cat?.title}</h1>
                <p className=" text-[14px]">{cat?.description.slice(0,30)}</p>
            </div>
        </div>
    );
};

export default Catagorgy;