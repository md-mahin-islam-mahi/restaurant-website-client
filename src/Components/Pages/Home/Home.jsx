import React from 'react';
import Banner from './Banner';
import Spinner from '../../Global/Spinner/Spinner';
import Swipper from './Swipper';
import PageHeader from '../../Global/Spinner/PageHeader';
import PopularMenus from '../Menu/PopularMenus/PopularMenus';

const Home = () => {
    return (
        <div>
           <Banner />
           <Swipper />
           <PopularMenus />
        </div>
    );
};

export default Home;