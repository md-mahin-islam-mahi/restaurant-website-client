import React from 'react';

const PageHeader = ({subHeader, header}) => {
    return (
        <div className='w-[424px] mx-auto my-11'>
            <p className='text-[24px] text-[#D99904] font-semibold'> --{subHeader}--</p>
            <h2 className='uppercase text-[50px] my-4 border-y-4 font-normal'>{header}</h2>
        </div>
    );
};

export default PageHeader;