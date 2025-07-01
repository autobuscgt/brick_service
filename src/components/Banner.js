
import production_video from '../static/background utils/background.webm'
function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-text-inner'>
            <h1>ВОЛГОГРАДСКИЙ <br/> ОБЛИЦОВОЧНЫЙ КИРПИЧ</h1>
            <video autoPlay loop muted playsInline>
                <source src={production_video} ></source>
            </video>
            </div>

        </div>
    );
}

export default Banner;