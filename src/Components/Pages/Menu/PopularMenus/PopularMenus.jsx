import React from 'react';
import useSWR from 'swr';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import PageHeader from '../../../Global/PageHeader';

const PopularMenus = () => {
    const fetcher = async (...args) => {
        const res = await fetch(...args);
        const data = await res.json();
        return data;
    }
    const { data, error } = useSWR('https://restaurant-website-server-lovat.vercel.app/menus',
        fetcher, {
        suspense: true
    }
    )
    const popularItems = data.filter(popular => popular.category === "popular")
    
    return (
        <section>
            <PageHeader 
                subHeader="--- Check it out ---"
                header="from our menu"
             />
            <div className='grid md:grid-cols-2 gap-5 text-start my-10'>
                {
                    popularItems.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </section>
    );
};

export default PopularMenus;