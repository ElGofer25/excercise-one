import { HomeIcon } from '@primer/octicons-react';
import { MdContactPhone } from "react-icons/md";
import Link from 'next/link'
import React from 'react'
import { FaSackDollar } from 'react-icons/fa6';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const navItem = [
  { path: '/about', text: 'About',},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},

]


export const Navbar = () => {
  return (
    <nav className='flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded items-center'>
        <Link className='mr-2 flex items-center' href='/'>
            <HomeIcon className='mr-2'/>
            Home
        </Link>
        {/*flex-1 Empuja los links a la derecha:
            mr-2 da la separación entre iconos y botón
        */}
        <div className='flex flex-1 items-center'></div>
          {
            navItem.map(navItem =>(
              <Link key={navItem.path} className='mr-2' href={navItem.path}>
                {navItem.text}
              </Link>
            ))
          }
    </nav>
  )
}
