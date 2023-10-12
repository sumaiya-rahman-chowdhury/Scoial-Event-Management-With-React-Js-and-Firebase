import { AuthenticationContext } from "../Authentication";

const Profile = () => {
    const items = JSON.parse(localStorage.getItem('selected'))

    console.log(items)
    return (
        <div>
            <h1 className=" text-center font-bold text-2xl">Added Service :</h1>
          <div className=" grid lg:grid-cols-3 gap-5 p-5 grid-cols-2">
          {
                items.map(item=> <div key={item.key}><div>
                    <li className=" list-none font-bold p-5 shadow-lg" >{item.serviceName} <br /> price: {item.priceRange}</li>
                    </div></div>)
            }
          </div>
        </div>
    );
};

export default Profile;