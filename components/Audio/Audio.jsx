import React from 'react';
import SampleAudio from '../../static/media/sample-audio.mp3';
import './Audio.css';

export const Audio = ({ width, height, loop, autoplay, muted}) =>{
    return (
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
    )
}

Audio.defaultProps = {
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
