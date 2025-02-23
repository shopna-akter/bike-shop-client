import Banner from "../../component/shared/Banner";
import AppFooter from "../../component/shared/Footer";
import Navbar from "../../component/shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AppFooter></AppFooter>
        </div>
    );
};

export default Home;