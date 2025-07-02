
import default_brick from '../static/production_photos/default.png'
import mixed_brick from '../static/production_photos/mixed.png'
import { lazy, Suspense} from 'react';
import { MULTICOLORS_ROUTE, PLAIN_ROTE } from '../utils/consts';

const ProductionCard = lazy(()=>import('./Cards/ProductionCard'))

function Cards(props) {
    const cards = [
        {id:1,image:default_brick,name:'Моноцвет',link:PLAIN_ROTE},
        {id:1,image:mixed_brick,name:'Миксовый',link:MULTICOLORS_ROUTE},
  ]
    return (
        <div className='card-centered' id='catalog'>
        <div className='card-container'>
            {cards.map((card)=>(
                <Suspense fallback={<p>Loading...</p>}>
                    <ProductionCard name={card.name} image={card.image} color={card.color} price={card.price} link={card.link}/>
                </Suspense>
            ))}
        </div>
        </div>
    );
}

export default Cards;