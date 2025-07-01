

function Card({name,sub_description,background}) {
    return (
        
        <div className='advantage-card'>
            <ul>
                <li> <img src={background} alt="advantage"/></li>
                <li> <h1>{name}</h1> </li> 
                <li> <h3>{sub_description}</h3> </li>
            </ul>
        </div>
    );
}

export default Card;