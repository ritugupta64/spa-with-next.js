import React from 'react';
import SampleVideo from '../../static/media/Sample-video.mp4';
import SampleVideoSubtitles from '../../static/media/Sample-video-subtitles.vtt';
import './Video.css';

export const Video = ({ videoType, width, height, loop, autoplay, muted }) =>{
    return (
        <video controls className="video" 
            width={width}
            height={height}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
        >
            <source src={SampleVideo} type={videoType} />
            Your browser does not support HTML5 video.
        </video>
    )
}

Video.defaultProps = {
 videoSrc: {SampleVideo},
 videoType: 'video/mp4',
 width: '600px',
 height: 'auto',
 loop: false,
 muted: false,
 autoplay: false,
 kind: 'subtitles',
 isDefault: true,
 subtitleSrc: {SampleVideoSubtitles},
 subtitleLabel: 'sample-video',
 srcLang: 'en'
}
