
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/core';
import production_video from '../static/background utils/video_slider.mov'

import colors from '../static/banner_photos/colors.png'
import wide_range from '../static/banner_photos/wide_range.png'
function Slider({frst,scnd,thrd}) {
    return (
    <div className='centered'>
    <Splide className="main-slider" options={ {
        rewind: true,
        gap: '1rem',
        autoStart:true,
        autoScroll:{
            speed:2
        }
      } } aria-label="Slider">
    <SplideSlide>
        <div className='slider-container'>
            <h1>{thrd}</h1>
                <video autoPlay loop muted playsInline>
                    <source src={production_video} ></source>
                </video>
        </div>

    </SplideSlide>
    <SplideSlide>
        <div className='slider-container'>
            <h1>{frst}</h1>
            <img src={colors} alt=" 1"/>
        </div>
          </SplideSlide>

       
    <SplideSlide>
        <div className='slider-container'>
            <h1>{scnd}</h1>
             <img src={wide_range} alt=" 2"/>
        </div>
           </SplideSlide>

    
    </Splide>

 </div>
    );
}

export default Slider;