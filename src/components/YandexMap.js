import React from 'react';

function YandexMap(props) {
    return (
        <div>
           <div className="yandex-map">
                <iframe src="https://yandex.ru/map-widget/v1/?ll=44.438262%2C48.629529&mode=whatshere&whatshere%5Bpoint%5D=44.437542%2C48.629853&whatshere%5Bzoom%5D=17&z=19"></iframe>
            </div> 
        </div>
    );
}

export default YandexMap;