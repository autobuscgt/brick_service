
import default_brick from '../static/production_photos/default.png'
import mixed_brick from '../static/production_photos/mixed.png'
import { lazy, Suspense} from 'react';

const ProductionCard = lazy(()=>import('./Cards/ProductionCard'))

function Cards(props) {
    const cards = [
        {id:1,image:default_brick,name:'Моноцвет',color:'',price:''},
        {id:1,image:mixed_brick,name:'Миксовый',color:'',price:''},
  ]
    return (
        <div className='card-centered' id='catalog'>
        <div className='card-container'>
            {cards.map((card)=>(
                <Suspense fallback={<p>Loading...</p>}>
                    <ProductionCard name={card.name} image={card.image} color={card.color} price={card.price}/>
                </Suspense>
            ))}
        </div>
        </div>
    );
}

export default Cards;