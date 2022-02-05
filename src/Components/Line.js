import React from 'react';
import { FaTelegramPlane,FaInstagram,FaFacebook,FaGithub} from "react-icons/fa";

export default function Line() {
    return (
        <div className='line'>
         <ul>
             <li><a href="https://t.me/abbos_web"><FaTelegramPlane/></a></li>
             <li><a href="#"><FaInstagram/></a></li>
             <li><a href="#"><FaFacebook/></a></li>
             <li><a href="https://github.com/Abbos-web"><FaGithub/></a></li>
         </ul>   
        </div>
    )
}
