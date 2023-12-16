import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import PageHeader from '../../Global/PageHeader';
import useSWR from 'swr';
import { fetcher } from '../../Global/Fetcher';

const Swipper = () => {

    const { data: swippers, error } = useSWR("https://restaurant-website-server-lovat.vercel.app/swippes", fetcher,{
        suspense:true
    })

    if (error) {
        return <h1>Could not reach the server</h1>;
    }

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
                {
                    swippers.map(swipper => 
                        <SwiperSlide key={swipper._id}>
                            <img src={swipper.img} alt="" />
                            <h1 className='text-[40px] font-bold -mt-20 text-white shadow-md'>{swipper.name}</h1>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Swipper;