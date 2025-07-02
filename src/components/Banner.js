function Banner({ kartinka, production_video,text}) {
  const hasVideo = production_video && production_video.trim() !== '';

  return (
    <div className='banner-container'>
      <div className='banner-text-inner'>
        <h1>{text}</h1>
        {hasVideo ? (
          <video autoPlay loop muted playsInline>
            <source src={production_video} />
            Ваш браузер не поддерживает видео.
          </video>
        ) : (
          <img src={kartinka} alt="banner-photo" />
        )}
      </div>
    </div>
  );
}

export default Banner;