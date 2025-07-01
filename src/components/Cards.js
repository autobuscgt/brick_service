import React from 'react';
import ProductionCard from './Cards/ProductionCard';

function Cards(props) {
    const cards = [
        {id:1,image:'https://1.downloader.disk.yandex.ru/preview/1f65785ee77cffc8e978cc314b24774545e1f54cee419c0b570862c675772cd0/inf/sZqiObBgS9hvniEYPim3o9JEkoGxjD5ygSVYzeMPQcCkqEtMTCu65FlrBd9hdOtU1R3XUWKBGEmyGNwa89a0dA%3D%3D?uid=2084450616&filename=2025-06-29%2016-46-41%20%281%29.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=2084450616&tknv=v3&size=1920x911',name:'Моноцвет',color:'',price:''},
        {id:1,image:'https://2.downloader.disk.yandex.ru/preview/f37f8741bf3135cca0d50b586c91054bec2849f93c9951ea2f9efe647af365a5/inf/M-i_CaeHakYVE5qIsocUrykIEHXH5GstKeAxbZpy2qtfaYO0K9oLj3kKGW3gE2Fzat-JG6-XbK5inbTkMImP_w%3D%3D?uid=2084450616&filename=2025-06-29%2016-48-35%20%282%29.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=2084450616&tknv=v3&size=1920x911',name:'Миксовый',color:'',price:''},
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