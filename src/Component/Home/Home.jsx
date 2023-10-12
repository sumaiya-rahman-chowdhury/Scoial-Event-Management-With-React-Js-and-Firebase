import Banner from "../Header/Banner";
import About from "./About";
import Services from "../Services/Services";
import CustomerReview from "../CustomerReview";

const Home = () => {
    return (
        <div>
            <div className=" rounded-none">
            <Banner></Banner>
            </div>
            <About></About>
            <Services></Services>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;