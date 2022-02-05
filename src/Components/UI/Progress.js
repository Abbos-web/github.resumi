import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
export default function Progress() {
    return (
        <div className=''>
          <ProgressBar 
          completed={80} 
          labelColor={'#000'}
          baseBgColor='#fff'
          animateOnRender={true}
          bgColor={'#5BD0ED'}
          height='20px'
          />  
        </div>
    )
}
