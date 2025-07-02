
import {NavLink} from 'react-router-dom'
function ProductionCard({image,name,price,color,link}) {
    return (
        <div className='choosen-card'>
            <ul>
                <li><h1>{name}</h1></li>
                <li><NavLink to={link}><img src={image} alt='product-photo' loading="lazy"/></NavLink></li>
                <li style={{textAlign:'center'}}>{color}</li>
                <li style={{textAlign:'center'}}>{price}  </li>
            </ul>
        </div>
    );
}

export default ProductionCard;