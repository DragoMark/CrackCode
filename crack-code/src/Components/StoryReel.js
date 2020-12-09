import React from 'react'
import Story from './Story';
import './StoryReel.css'
import story1 from '../assets/story1alt.jpg';
import story2 from '../assets/story2alt.png';
import story3 from '../assets/story3alt.jpg';
import icon from '../assets/icon.png';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story 
            image={story1} 
            profileSrc={icon} 
            title='shittertons'/>  

            <Story 
            image={story2} 
            profileSrc={icon} 
            title='notSoShittertons'/>     

            <Story 
            image={story3} 
            profileSrc={icon} 
            title='NightmareNightmareNighmare'/>

            <Story 
            image={story2} 
            profileSrc={icon} 
            title='DedTurtleis'/> 

            <Story 
            image={story1} 
            profileSrc={icon} 
            title='GoodTurtle'/>                 
        </div>
        
    )
}

export default StoryReel
