import React from 'react';
import Progress from '../UI/Progress';
import ProgressBar from '@ramonak/react-progress-bar';

export default function Skills() {
    return (
        <div className='skills'>
            <ul>
                <li><span className="textPro">HTML5</span>
                    <ProgressBar
                        completed={85}
                        labelColor={'#000'}
                        baseBgColor='#fff'
                        animateOnRender={true}
                        bgColor={'#5BD0ED'}
                        height='20px'
                        width='50%'
                        className='proBar'
                        transitionDuration='2.5s'
                    />
                </li>

                <li><span className="textPro">CSS3</span>
                    <ProgressBar
                        completed={90}
                        labelColor={'#000'}
                        baseBgColor='#fff'
                        animateOnRender={true}
                        bgColor={'#5BD0ED'}
                        height='20px'
                        width='50%'
                        className='proBar'
                        transitionDuration='3.5s'
                    />
                </li>

                <li><span className="textPro">SASS</span>
                    <ProgressBar
                        completed={45}
                        labelColor={'#000'}
                        baseBgColor='#fff'
                        animateOnRender={true}
                        bgColor={'#5BD0ED'}
                        height='20px'
                        width='50%'
                        className='proBar'
                        transitionDuration='3.5s'
                    />
                </li>

                <li><span className="textPro">Bootstrap</span>
                    <ProgressBar
                        completed={50}
                        labelColor={'#000'}
                        baseBgColor='#fff'
                        animateOnRender={true}
                        bgColor={'#5BD0ED'}
                        height='20px'
                        width='50%'
                        className='proBar'
                        transitionDuration='3.5s'
                    />
                </li>

                <li><span className="textPro">JavaScript(ES6)</span>
                    <ProgressBar
                        completed={60}
                        labelColor={'#000'}
                        baseBgColor='#fff'
                        animateOnRender={true}
                        bgColor={'#5BD0ED'}
                        height='20px'
                        width='50%'
                        className='proBar'
                        transitionDuration='4.5s'
                    />
                </li>

                <li><span className="textPro">ReactJS</span>
                    <ProgressBar
                        completed={60}
                        labelColor={'#000'}
                        baseBgColor='#fff'
                        animateOnRender={true}
                        bgColor={'#5BD0ED'}
                        height='20px'
                        width='50%'
                        className='proBar'
                        transitionDuration='5.5s'
                    />
                </li>

                
               
            </ul>

        </div>
    )
}
