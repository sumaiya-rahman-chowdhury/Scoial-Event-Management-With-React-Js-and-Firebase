import { useContext } from "react";
import { AuthenticationContext } from "./Authentication";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    
    const {user,loading} = useContext(AuthenticationContext)
    if(loading){
        return <div className=" font-bold text-center text-3xl ">Wait............... 
        <div className="flex justify-center ">
        <img src="https://i.ibb.co/zVjtczy/NINTCHDBPICT000633088563.jpg" className=" h-[300px]"></img> 
        </div>
        </div>
    }
    if (user) {
        return children
    }
    
    return <Navigate to='/login'></Navigate>

};

export default ProtectedRoute;