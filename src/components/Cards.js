
import ProductionCard from './Cards/ProductionCard';
import default_brick from '../static/production_photos/default.png'
import mixed_brick from '../static/production_photos/mixed.png'
function Cards(props) {
    const cards = [
        {id:1,image:default_brick,name:'Моноцвет',color:'',price:''},
        {id:1,image:mixed_brick,name:'Миксовый',color:'',price:''},
  ]
    return (
        <div className='card-centered' id='catalog'>
        <div className='card-container'>
            {cards.map((card)=>(
                <ProductionCard name={card.name} image={card.image} color={card.color} price={card.price}/>
            ))}
        </div>
        </div>
    );
}

export default Cards;