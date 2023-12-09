import React from 'react';

const SwipperInfo = ({swippe}) => {
    const {img, name} = swippe;
    return (
        <>
            <img src={img} alt="" />
            <h1>{name}</h1>
        </>
    );
};

export default SwipperInfo;