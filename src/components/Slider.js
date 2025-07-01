
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/core';
import production_video from '../static/background utils/video_slider.mov'
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
            <img src="https://media.discordapp.net/attachments/1176202984141635747/1389680772448784544/-dFcphn7eOdUhd2JQvPduQcVyyb-j76ImuvCWfD921B64G4vO5TL9tl5TFk12psPqrkKslkqSD09hmTK9RqF5w3D3D.png?ex=68658093&is=68642f13&hm=f0a434f4a6db2654de7cd57f40fb91da0d10a282b6546ae94978ff353ac114da&=&format=webp&quality=lossless" alt=" 1"/>
        </div>
          </SplideSlide>

       
    <SplideSlide>
        <div className='slider-container'>
            <h1>{scnd}</h1>
             <img src="https://media.discordapp.net/attachments/1176202984141635747/1389680806179504240/4eVWnupS70l5lycabN17zLp1j4BoqX1A2CYET2VyM9M--MPFo8ONuu4OSiAAnbilQKB9O9-Upn9Yfjy-RmEkAw3D3D.png?ex=6865809b&is=68642f1b&hm=62391ee27f77b3e08908fbe6d857a7ce19c4f2f8336d42ff5c051eed36f2e188&=&format=webp&quality=lossless" alt=" 2"/>
        </div>
           </SplideSlide>

    
    </Splide>

 </div>
    );
}

export default Slider;