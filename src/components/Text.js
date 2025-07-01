
function TextHM({prop}) {
    return (
            <div className='centered'>
                <div className='banner-text'>
                <h1>{prop}</h1> <h1 style={{position:'absolute',right:'20%',opacity:'0.7',cursor:'default'}}>▼</h1> 
                </div>
            </div>
    );
}

export default TextHM;