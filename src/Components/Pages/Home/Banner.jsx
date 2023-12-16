import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useSWR from "swr";
import { Suspense } from "react";
import Spinner from "../../Global/Spinner/Spinner";
import { fetcher } from "../../Global/Fetcher";

const Banner = () => {
    // const fetcher = async (...args) => {
    //     const res = await fetch(...args);
    //     const data = await res.json();
    //     return data;
    // };

    const { data: banners, error } = useSWR(
        "https://restaurant-website-server-lovat.vercel.app/banners",
        fetcher
    );

    if (error) {
        return <h1>Could not reach the server</h1>;
    }

    if (!banners) {
        return <Spinner />;
    }

    return (
        <Carousel>
            {banners.map((banner, index) => (
                <div key={index}>
                    <img src={banner.img} alt="" />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
