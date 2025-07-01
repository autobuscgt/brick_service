
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/core';

function ProjectSlider() {
    return (
    <div className='centered'>
    <Splide className="main-slider" options={ {
        rewind: true,
        gap: '1rem',
      } } aria-label="Slider">

    <SplideSlide>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt=" 1"/>
    </SplideSlide>
    
    </Splide>

 </div>
    );
}

export default ProjectSlider;