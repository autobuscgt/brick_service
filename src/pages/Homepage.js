

import { lazy, Suspense } from 'react';

import Advantage from '../components/Advantage';
import TextHM from '../components/Text';
import production_video from '../static/background utils/background.webm'


const Banner = lazy( ()=> import('../components/Banner') )
const Slider = lazy( ()=> import('../components/Slider') )
const Cards = lazy(()=> import('../components/Cards'))
const YandexMap = lazy(()=> import('../components/YandexMap'))
const TEMP = lazy(()=> import('../components/TEMP'))

function Homepage() {
    return (
        <div className='content'>
            <Suspense fallback={<p>Loading...</p>}>
                <Banner production_video={production_video} kartinka={' '} text={(
                    <>ВОЛГОГРАДСКИЙ <br/>ОБЛИЦОВОЧНЫЙ КИРПИЧ</>
                )}/>
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                    <div className='description'>
                        <TEMP/>
                    </div>
            </Suspense>
            <TextHM prop={'Товары'}/>
            <Suspense fallback={<p>Loading...</p>}>
                <Cards/>
            </Suspense>
                <TextHM prop={'Преимущества компании'}/>
            <Advantage/>
            <Suspense>
                <Slider frst = 'Автоматизированная линия' scnd ='Большой выбор'  thrd='Высококачественное сырье' fourth='Разные цвета'/>
            </Suspense>
            {/* <TextHM prop={'Проекты'}/>
            <div className='project-slider'>
            <ProjectSlider/>
            </div> */}
            <TextHM prop={'Где нас можно найти ?'}/> 
            <Suspense fallback={<p>Loading...</p>}>
                 <YandexMap/>
            </Suspense>
            <div className='background-abstract'/>
        </div>
    );
}

export default Homepage;