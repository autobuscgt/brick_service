import './brickstyles.css'

import mixed_chocolate from '../../static/temp_photos/mixed_chocolate.jpeg'
import yellow from '../../static/temp_photos/mixed_yellow.jpeg'
import mixed_green from '../../static/temp_photos/mixed_green.jpeg'
import red from '../../static/temp_photos/mixed_redgraphite.jpeg'
import chocolate from '../../static/temp_photos/mixed_chocolate.jpeg'
import mixed_mars from '../../static/temp_photos/mixed_mars.jpeg'
import dark from '../../static/temp_photos/mixed_dark.jpeg'
import mars from '../../static/temp_photos/mixed_white_grey.jpeg'

import { useNavigate, useParams } from 'react-router-dom'
import kartinka from '../../static/colors/mixed.svg'
import Banner from '../../components/Banner'
import { useState } from 'react'

function MultiColors() {
    const size1 = (<div> 1.4 НФ (полуторный) <br/>
                    Размер: 250*120*88 <br/> Цвет:<br/>
                    Фактура (вид): гладкий </div>)
    const size2 = (<div> 1НФ (одинарный) <br/>
                    Размер: 250*120*65 <br/> Цвет:<br/>
                    Фактура (вид): гладкий</div> )
        const bricks = [
        {id:1,name:'Шоколадная глазурь',description:size2,price:'',image:mixed_chocolate, type:'1 НФ'},
        {id:2,name:'Шоколадная глазурь',description:size1,price:'',image:mixed_chocolate, type:'1.4 НФ'},
        {id:3,name:'Медальон',description:size2,price:'',image:yellow, type:'1 НФ'},
        {id:4,name:'Медальон',description:size1,price:'',image:yellow, type:'1.4 НФ'},
        {id:5,name:'Красный графит',description:size2,price:'',image:red, type:'1 НФ'},
        {id:6,name:'Красный графит',description:size1,price:'',image:red, type:'1.4 НФ'},
        {id:7,name:'Марс',description:size2,price:'',image:mixed_mars, type:'1 НФ'},
        {id:8,name:'Марс',description:size1,price:'',image:mixed_mars, type:'1.4 НФ'},
        {id:9,name:'Фисташка',description:size2,price:'',image:mixed_green, type:'1 НФ'},
        {id:10,name:'Фисташка',description:size1,price:'',image:mixed_green, type:'1.4 НФ'},
        {id:11,name:'Шоколадная глазурь',description:size2,price:'',image:chocolate, type:'1 НФ'},
        {id:12,name:'Шоколадная глазурь',description:size1,price:'',image:chocolate, type:'1.4 НФ'},
        {id:12,name:'Чернобурка',description:size2,price:'',image:dark, type:'1 НФ'},
        {id:13,name:'Чернобурка',description:size1,price:'',image:dark, type:'1.4 НФ'},
        {id:14,name:'Шиншилла',description:size2,price:'',image:mars, type:'1 НФ'},
        {id:15,name:'Шиншилла',description:size1,price:'',image:mars, type:'1.4 НФ'},
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
    <Banner kartinka={kartinka} text={(
      <>Моноцвет</>
    )}/>

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
              <li> <button onClick={() => handleClick()}>Подробнее</button></li>
            </ul>
          </div>
        ))}
    </div>
  </div>
);
}

export default MultiColors;