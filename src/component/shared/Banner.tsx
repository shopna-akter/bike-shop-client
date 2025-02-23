import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';
import "swiper/swiper-bundle.css"
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper -z-10"
            >
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="md:text-4xl text-xl font-bold text-center lg:text-left">
                            <Typewriter
                                words={['Ride Beyond Limits']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="md:text-lg text-sm mt-4 text-center lg:text-left">Explore the world on two wheels with top-quality bikes designed for performance, comfort, and adventure.</p>
                    </div>
                    <img src="https://i.ibb.co/6wkvvL9/15.jpg" alt="Cycling Adventure" className="w-full md:h-[500px] h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="md:text-4xl text-xl font-bold text-center lg:text-left">
                            <Typewriter
                                words={['Gear Up for Adventure']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="md:text-lg text-sm mt-4 text-center lg:text-left">Discover high-quality cycling gear and accessories to enhance your riding experience.</p>
                    </div>
                    <img src="https://i.ibb.co/8DdHKcf/slider-2-image.png" alt="Bike Gear" className="w-full md:h-[500px] h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="md:text-4xl text-xl font-bold text-center lg:text-left">
                            <Typewriter
                                words={['Join the Cycling Community']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="md:text-lg text-sm mt-4 text-center lg:text-left">Be part of a passionate community of cyclists who share your love for adventure and exploration.</p>
                    </div>
                    <img src="https://i.ibb.co/qpLLTxk/h3.jpg" alt="Cycling Community" className="w-full md:h-[500px] h-[300px]" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;