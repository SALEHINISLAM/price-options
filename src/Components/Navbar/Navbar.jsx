import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { LuMenuSquare } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
const Navbar = props => {

    const [open, setOpen]=useState(false);

    const routes = [
        { name: "Home", id: 1, path: "/" },
        { name: "Products", id: 2, path: "/products" },
        { name: "About", id: 3, path: "/about" },
        { name: "Contact", id: 4, path: "/contact" },
        { name: "Login", id: 5, path: "/login" },
      ];      

    return (
        <nav className='bg-yellow-200 text-black p-6 container mx-auto rounded-b-2xl'>
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open===true? 
                    <LuMenuSquare className='text-4xl'/> 
                    : <AiOutlineCloseSquare className='text-4xl'/>
                }
                
            </div>
            <ul className={`${open===false? 'top-20 left-6 border border-red-600':'-left-60 top-20'} duration-1000 md:flex md:flex-row md:justify-evenly px-6 absolute md:static bg-yellow-200 shadow-lg md:shadow-none py-3 rounded-xl text-lg font-semibold`}>
                <li className='hidden md:flex w-1/4' ></li>
                {
                    routes.map(route=><Link  
                                        key={route.id}
                                        route={route}
                                        ></Link>)
                }
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;