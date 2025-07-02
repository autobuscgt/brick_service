import './brickstyles.css'
import white from '../../static/temp_photos/white.jpeg'
import yellow from '../../static/temp_photos/yellow.jpeg'
import emerald from '../../static/temp_photos/emerald.jpeg'
import red from '../../static/temp_photos/red.jpeg'
import chocolate from '../../static/temp_photos/chocolate.jpeg'
import graphite from '../../static/temp_photos/graphite.jpeg'
import { useNavigate, useParams } from 'react-router-dom'
import Filter from '../Filters/Filter'
import Banner from '../../components/Banner'

function MonoColor() {
    const {id} = useParams()
    const navigate = useNavigate()
    const handleClick = ()=> {

        navigate(`/product ${id}`)
    }
    const size1 = (<div> 1.4 НФ (полуторный) <br/>
                    Размер: 250*120*88 <br/>
                    Фактура (вид): гладкий </div>)
    const size2 = (<div> 1НФ (одинарный) <br/>
                    Размер: 250*120*65 <br/>
                    Фактура (вид): гладкий</div> )
    
    const bricks = [
        {id:1,name:'Белый',description:size1,price:'',image:white},
        {id:2,name:'Белый',description:size2,price:'',image:white},
        {id:3,name:'Желтый',description:size1,price:'',image:yellow},
        {id:4,name:'Желтый',description:size2,price:'',image:yellow},
        {id:5,name:'Красный',description:size1,price:'',image:red},
        {id:6,name:'Красный',description:size2,price:'',image:red},
        {id:7,name:'Графит',description:size1,price:'',image:graphite},
        {id:8,name:'Графит',description:size2,price:'',image:graphite},
        {id:9,name:'Изумруд',description:size1,price:'',image:emerald},
        {id:10,name:'Изумруд',description:size2,price:'',image:emerald},
        {id:11,name:'Шоколад',description:size1,price:'',image:chocolate},
        {id:12,name:'Шоколад',description:size2,price:'',image:chocolate},
    ]
    return (
        <div>

        
        <Banner/>
        <div className='centered' style={{marginTop:'1%'}}>
        <Filter/>
        <div className='brick-container'> 
            {bricks.map((brick)=>(
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