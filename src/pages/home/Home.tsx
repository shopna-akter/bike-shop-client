import FeaturedProducts from "../../component/FeaturedProducts";
import Banner from "../../component/shared/Banner";
import AppFooter from "../../component/shared/Footer";
import Testimonials from "../../component/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <Testimonials/>
            <AppFooter/>
        </div>
    );
};

export default Home;