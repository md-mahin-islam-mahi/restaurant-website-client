import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-white footer flex flex-col md:flex-row justify-center items-center gap-0 w-full h-[400px]">
                <aside className='w-[50%] h-full mx-0 py-10 px-20 flex flex-col justify-center items-center bg-[#1F2937]'>
                    <h1 className='text-[32px] mb-10 uppercase'>Contact Us</h1>
                    <p className='text-[20px] leading-[36px]'>
                        123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00 <br />
                    </p>
                </aside>
                <aside className='w-[50%] h-full mx-0 py-10 px-20 flex flex-col justify-center items-center bg-[#111827]'>
                    <h1 className='text-[32px] mb-10 uppercase'>Follow Us</h1>
                    <p className='text-[20px] leading-[36px]'>Join us on social media</p>
                </aside>
            </footer>
            <div>
                <p className='bg-[#151515] text-white h-[70px] flex justify-center items-center'>
                    {`Copyright ©${new Date().getFullYear()} CulinaryCloud. All rights reserved.`}
                </p>
            </div>
        </div>
    );
};

export default Footer;