import React from 'react';
import ProCard from '../UI/ProCard';
import Card1  from '../img/weather2.png';
import Card2  from '../img/youtube.png';
import Card3  from '../img/card3.jpg';


export default function Prices(props) {
    return (
        <div className='prices'>
            <ProCard rasm={Card1} title={'Weather Forecast'} referense={'Enjoy Life Studio'}  link={'https://mirzaxon97.github.io/weatherApp/'}/>
            <ProCard rasm={Card2} title={"You Tube"} referense={'Enjoy Life Studio'} link={'https://react-you-tube-amaliyot.netlify.app'} />
            <ProCard rasm={Card3} title={'Shopping card'} referense={'Enjoy Life Studio'} />
        </div>
    )
}
