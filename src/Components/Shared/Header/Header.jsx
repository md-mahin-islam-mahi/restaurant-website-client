import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "keep-react";

const Header = () => {

    // for larg device
    const navList = <>
        <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/contact">Contact Us</Link>
        <Link className='mx-3' to="/dashboard">Dashboard</Link>
        <Link className='mx-3' to="/menu">Our Menu</Link>
        <Link className='mx-3' to="/shop">Our Shop</Link>
    </>

    return (
        <div className='sticky top-0 -mb-[65px] z-10 text-white'>
            <div className="navbar mx-auto bg-black bg-opacity-30">
                <div className="navbar-start">
                    <h1>The Bites</h1>
                </div>

                <div className="navbar-end">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navList
                            }
                        </ul>
                    </div>
                    <ul tabIndex={0} className="hidden lg:flex justify-around">
                        {
                            navList
                        }
                    </ul>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;