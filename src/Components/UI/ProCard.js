import React from 'react';
import {GiStaryu} from 'react-icons/gi';


export default function ProCard(props) {
    return (
        <div className='procard'>
            <div className="photo">
                <img className='rasm' src={props.rasm} alt=''/>
            </div> 

           <div className='text'>
           <span><a href={props.link}>{props.title}</a></span>
           <span>{props.referense}</span>
           <span><GiStaryu/> <GiStaryu/> <GiStaryu/>  <GiStaryu/> <GiStaryu/></span>
           </div>
        </div>
    )
}
