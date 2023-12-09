import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import PageHeader from '../../Global/Spinner/PageHeader';

const Swipper = () => {

    return (
        <section>
            <PageHeader 
                subHeader={"From 11:00am to 10:00pm"}
                header={"order online"}
             />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper py-5 pb-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>SALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>PIZZA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>SOUPE</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>DESERT</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>SALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>PIZZA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>SOUPE</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Swipper;