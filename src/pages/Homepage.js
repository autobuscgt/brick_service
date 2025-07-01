
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Advantage from '../components/Advantage';
import TextHM from '../components/Text';
import YandexMap from '../components/YandexMap';
import TEMP from '../components/TEMP';

function Homepage() {
    return (
        <div className='content'>
            <Banner/>
            <TextHM prop={'Наши работы'}/>
            <Slider frst = 'Большой выбор' scnd ='Разные цвета'  thrd='Свое производство'/>
            <div className='description'>
                <TEMP/>
            </div>
            <TextHM prop={'Товары'}/>
            <Cards/>
                <TextHM prop={'Преимущества компании'}/>
            <Advantage/>
            {/* <TextHM prop={'Проекты'}/>
            <div className='project-slider'>
            <ProjectSlider/>
            </div> */}
            <TextHM prop={'Где нас можно найти ?'}/> 
            <YandexMap/>
            <div className='background-abstract'/>
        </div>
    );
}

export default Homepage;