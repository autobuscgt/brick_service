import Card from './Cards/Card';

import brickImage from '../static/cards/brick_ico.png'
import fabric from '../static/cards/fabric.png'
import palette from '../static/cards/pallete.png'
import gears from '../static/cards/gears.png'
function Advantage() {
    const advantages = [
        {id:1,
            name:'Автоматизированная производственная линия',
            sub_description:'Исключает человеческий фактор',
            background: gears},
        {id:2,
            name:'Высококачественное сырье',
            sub_description:'Щебень известняковый (марка М600), цемент белый (1-500 ДО ГОСТ 965-89), цемент серый М-500, сухой пигмент (окись железа)',
            background:fabric},
        {id:3,
            name:'Гиперпрессованный кирпич',
            sub_description:'Характеризуется высокой точностью размеров',
            background:brickImage},
        {id:4,
            name:(
                <>
                    Цветовая <br/> палитра
                </>
            ),
            sub_description:'Широкий выбор оттенков позволяет создать уникальный облик вашего здания',
            background:palette},
    ]
    return (
        <div className='advantage-container' id='advantage'> 
           {advantages.map((advantage)=>(
                    <Card key ={advantage.id} name={advantage.name} sub_description={advantage.sub_description} background={advantage.background}/>
           ))} 
        </div>
    );
}

export default Advantage;