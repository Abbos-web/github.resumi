import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
           <ul>
               <li><Link className='link' to='/'>Personal Information</Link></li>
               <li><Link className='link' to='/skills'>My Skills</Link></li>
               <li><Link className='link' to='/prices'>My Portifolio</Link></li>
               <li><Link className='link' to='/blogs'>My Blog</Link></li>
           </ul> 
        </div>
    )
}
