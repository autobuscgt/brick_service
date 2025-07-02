import './brickstyles.css'
import white from '../../static/temp_photos/white.jpeg'
import yellow from '../../static/temp_photos/yellow.jpeg'
import emerald from '../../static/temp_photos/emerald.jpeg'
import red from '../../static/temp_photos/red.jpeg'
import chocolate from '../../static/temp_photos/chocolate.jpeg'
import graphite from '../../static/temp_photos/graphite.jpeg'
import { useNavigate, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import { useState } from 'react'

function MonoColor() {
    const size1 = (<div> 1.4 НФ (полуторный) <br/>
                    Размер: 250*120*88 <br/>
                    Фактура (вид): гладкий </div>)
    const size2 = (<div> 1НФ (одинарный) <br/>
                    Размер: 250*120*65 <br/>
                    Фактура (вид): гладкий</div> )
    
        const bricks = [
        {id:1,name:'Белый',description:size2,price:'',image:white, type:'1 НФ'},
        {id:2,name:'Белый',description:size1,price:'',image:white, type:'1.4 НФ'},
        {id:3,name:'Желтый',description:size2,price:'',image:yellow, type:'1 НФ'},
        {id:4,name:'Желтый',description:size1,price:'',image:yellow, type:'1.4 НФ'},
        {id:5,name:'Красный',description:size2,price:'',image:red, type:'1 НФ'},
        {id:6,name:'Красный',description:size1,price:'',image:red, type:'1.4 НФ'},
        {id:7,name:'Графит',description:size2,price:'',image:graphite, type:'1 НФ'},
        {id:8,name:'Графит',description:size1,price:'',image:graphite, type:'1.4 НФ'},
        {id:9,name:'Изумруд',description:size2,price:'',image:emerald, type:'1 НФ'},
        {id:10,name:'Изумруд',description:size1,price:'',image:emerald, type:'1.4 НФ'},
        {id:11,name:'Шоколад',description:size2,price:'',image:chocolate, type:'1 НФ'},
        {id:12,name:'Шоколад',description:size1,price:'',image:chocolate, type:'1.4 НФ'},
    ]
    const [filteredData, setData] = useState(bricks)
    const {id} = useParams()
    const navigate = useNavigate()
    const handleClick = ()=> {
        navigate(`/product ${id}`)
    }

    const filterByType = (type) => { 
        if (type === 'all') {
            setData(bricks)
        } else {
            const newData = bricks.filter(item => item.type === type)
            setData(newData)
        }
    }

    return (
        <div>
        <Banner/>
        <div className='centered' style={{marginTop:'1%'}}> 
        <div className='filter-container'>
            <button onClick={() => filterByType('all')}>Все</button>
            <button onClick={() => filterByType('1 НФ')}>1 НФ</button>
            <button onClick={() => filterByType('1.4 НФ')}>1.4 НФ</button>
        </div>


        <div className='brick-container'> 
            {filteredData.map((brick)=>(
                <div className='brick-card' key={brick.id}>
                    <ul>
                        <li> <img src={brick.image} alt='brick-photo'/> </li>
                        <li> <h1>{brick.name}</h1> </li>
                        <li> {brick.description} </li>
                        <li> {brick.price}</li>
                        <li> <button onClick={() => handleClick}>Подробнее</button></li>
                    </ul>
                </div>
            ))}
        </div></div>
        </div>
    );
}

export default MonoColor;