import Banner from "../../component/shared/Banner";
import AppFooter from "../../component/shared/Footer";
import Navbar from "../../component/shared/Navbar";
import Testimonials from "../../component/Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Testimonials/>
            <AppFooter></AppFooter>
        </div>
    );
};

export default Home;