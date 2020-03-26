import React from 'react';
import SampleAudio from '../../static/media/sample-audio.mp3';
import './Audio.css';

export const AudioWithTranscript = ({ width, height, loop, autoplay, muted}) =>{
    const showTranscript = () => {
        document.querySelector('.transcript').style.display = 'block'
    }
    return (
        <>
        <button className="read-transcript" onClick={showTranscript} aria-label="Show transcript button">Show transcript</button>
        <audio controls className="audio"
            width={width}
            height={height}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
        >
            <source src={SampleAudio} type='audio/mp3' />
            Your browser does not support HTML5 audio.
        </audio>
        <section className="transcript" style={{display: 'none'}}>
        <article className="transcript-text" aria-live="polite">
        Welcome to click hand go away. Finding maps, location, teachers, college point of interest disability services. The disability services office is located on the first floor of Thorndyke directions are available from Amsterdam and the 11 bus northbound, Amsterdam, 11 bus southbound Broadway and four bus northbound. Broadway and four bus South bound downtown. Number one train uptown, number one train thorn security booth and Zahn call security entrance.
        </article></section>
        </>
    )
}

AudioWithTranscript.defaultProps = {
 width: 'auto',
 height: 'auto',
 loop: false,
 muted: false,
 autoplay: false,
 kind: 'subtitles',
 isDefault: true,
 subtitleLabel: 'sample-video',
 srcLang: 'en'
}
