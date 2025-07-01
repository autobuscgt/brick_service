

function ProductionCard({image,name,price,color}) {
    return (
        <div className='choosen-card'>
            <ul>
                <li><h1>{name}</h1></li>
                <li><img src={image} alt='product-photo' loading="lazy"/></li>
                <li style={{textAlign:'center'}}>{color}</li>
                <li style={{textAlign:'center'}}>{price}  </li>
            </ul>
        </div>
    );
}

export default ProductionCard;