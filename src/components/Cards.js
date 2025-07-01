import React from 'react';
import ProductionCard from './Cards/ProductionCard';

function Cards(props) {
    const cards = [
        {id:1,image:'https://media.discordapp.net/attachments/1176202984141635747/1389680856062234755/sZqiObBgS9hvniEYPim3o9JEkoGxjD5ygSVYzeMPQcCkqEtMTCu65FlrBd9hdOtU1R3XUWKBGEmyGNwa89a0dA3D3D.png?ex=686580a7&is=68642f27&hm=3fed90e0fcd352a7323c06d1add9de8b66eac6e01dec12a6779f657c46dfc80c&=&format=webp&quality=lossless',name:'Моноцвет',color:'',price:''},
        {id:1,image:'https://media.discordapp.net/attachments/1176202984141635747/1389680880351711353/M-i_CaeHakYVE5qIsocUrykIEHXH5GstKeAxbZpy2qtfaYO0K9oLj3kKGW3gE2Fzat-JG6-XbK5inbTkMImP_w3D3D.png?ex=686580ac&is=68642f2c&hm=c50edbb91d5fd43715c0e213f1123d193aa5ab3cb070fc5f795475289003c7e3&=&format=webp&quality=lossless',name:'Миксовый',color:'',price:''},
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