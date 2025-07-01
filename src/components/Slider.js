
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
            <img src="https://2.downloader.disk.yandex.ru/preview/50cc38d08a019f266b957a5cb09251fee0f74f384b779aeb68e6c099e43f4265/inf/-dFcphn7eOdUhd2JQvPduQcVyyb-j76ImuvCWfD921B64G4vO5TL9tl5TFk12psPqrkKslkqSD09hmTK9RqF5w%3D%3D?uid=2084450616&filename=%D0%9E%D0%B1%D1%89%D0%B0%D1%8F%20%D1%84%D0%BE%D1%82%D0%BE%20%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%D0%B5%D0%B9.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=2084450616&tknv=v3&size=1905x911" alt=" 1"/>
        </div>
          </SplideSlide>

       
    <SplideSlide>
        <div className='slider-container'>
            <h1>{scnd}</h1>
             <img src="https://1.downloader.disk.yandex.ru/preview/4ed6a330a9475d02d9b46cd0f0d608191271d3194c8f70f210007f02c7cb0af9/inf/4eVWnupS70l5lycabN17zLp1j4BoqX1A2CYET2VyM9M--MPFo8ONuu4OSiAAnbilQKB9O9-Upn9Yfjy-RmEkAw%3D%3D?uid=2084450616&filename=%D0%A4%D0%BE%D1%82%D0%BE%20%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%20%D0%B2%20%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B5%20.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=2084450616&tknv=v3&size=1920x911" alt=" 2"/>
        </div>
           </SplideSlide>

    
    </Splide>

 </div>
    );
}

export default Slider;