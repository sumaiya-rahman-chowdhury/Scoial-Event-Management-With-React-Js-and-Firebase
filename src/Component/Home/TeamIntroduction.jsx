
const TeamIntroduction = () => {
    return (
        <div className=" space-y-5">
            <h2 className= " text-center text-2xl">Team Members</h2>
            <div className=" flex justify-center gap-5 lg:flex-nowrap flex-wrap">
                <div  className=" space-y-3 mt-10 ">
                    <img src="https://i.ibb.co/yXxWtBM/safar-safarov-Jq-C-VQQTl-Po-unsplash.jpg" alt="" className="h-[200px]  w-[150px]"/>
                    <p className=" text-center font-bold">Sarah Paul</p>
                </div>
                <div  className=" space-y-3 mt-24  p-3">
                    <img src="https://i.ibb.co/qDJKW0F/pexels-monstera-production-6281879.jpg" alt=""  className="h-[200px] w-[150px]"/>
                    <p className="font-bold text-center">Ayana Begh</p>
                </div>
                <div   className=" space-y-3 mt-10">
                    <img src="https://i.ibb.co/d7JJMTJ/pexels-monstera-production-6282012.jpg" alt="" className="h-[200px]  w-[150px]"/>
                    <p className="font-bold text-center">Sujata Begh</p>
                </div>
            </div>
        </div>
    );
};

export default TeamIntroduction;