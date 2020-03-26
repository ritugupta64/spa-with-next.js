import React from 'react';
import SampleVideo from '../../static/media/Sample-video.mp4';
import SampleVideoSubtitles from '../../static/media/Sample-video-subtitles.vtt';

export const VideoWithSubtitles = ({ videoType, width, height, loop, autoplay, muted, isDefault, srcLang, subtitleLabel }) =>{
    return (
        <video controls className="video"
            width={width}
            height={height}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
        >
          {SampleVideo}
            <source src={SampleVideo} type={videoType} />
            <track src={SampleVideoSubtitles} kind='subtitles' default={isDefault} srcLang={srcLang} label={subtitleLabel} />
            Your browser does not support HTML5 video.
        </video>
    )
}

VideoWithSubtitles.defaultProps = {
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
