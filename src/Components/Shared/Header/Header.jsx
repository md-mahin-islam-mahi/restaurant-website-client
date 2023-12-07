import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "keep-react";

const Header = () => {

    const navItemsLg = <>
        <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/contact">Contact Us</Link>
        <Link className='mx-3' to="/dashboard">Dashboard</Link>
        <Link className='mx-3' to="/menu">Our Menu</Link>
        <Link className='mx-3' to="/shop">Our Shop</Link>
    </>

    const navItemsSm = <>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/shop">Our Shop</Link>
    </>

    return (
        <Navbar fluid={true} className="!py-5">
            <Navbar.Container className="flex items-center justify-between">
                <Navbar.Brand>
                    <h1 className='text-[30px]'>
                        <Link to="/">
                            The Bites
                        </Link>
                    </h1>
                </Navbar.Brand>
                <Navbar.Collapse
                    collapseType="sidebar"
                    className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
                >
                    <Navbar.Container tag="ul" className="flex flex-col gap-5 text-start pl-5">
                        {
                            navItemsSm
                        }
                        <Navbar.Link linkName="News" className="!py-0" />
                        <Navbar.Link linkName="Resources" className="!py-0" />
                    </Navbar.Container>
                </Navbar.Collapse>
                <Navbar.Container className="flex gap-1">
                    <Navbar.Toggle className="block" />
                    <div className='hidden lg:flex justify-between'>
                        {
                            navItemsLg
                        }
                    </div>
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
};

export default Header;