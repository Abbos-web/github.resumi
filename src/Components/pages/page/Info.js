import React from 'react';
import {FaUserTie,FaPhoneAlt} from 'react-icons/fa';
import {BsCalendarDateFill} from 'react-icons/bs';
import {MdAlternateEmail}  from 'react-icons/md';
import {SiGooglemaps}  from 'react-icons/si'
export default function Info() {
    return (
        <div className='info'>
           <ul>
               <li><FaUserTie/>  Abbos Nusratillayev</li>
               <li><BsCalendarDateFill/>  April 23, 2006</li>
               <li><FaPhoneAlt/>  +998 33 483 19 69</li>
               <li><MdAlternateEmail/>  nusratillayevabbos@gmail.com</li>
               <li><SiGooglemaps/>  Uzbekistan,Kashkadarya,Kasbi district</li>
           </ul> 
        </div>
    )
}
