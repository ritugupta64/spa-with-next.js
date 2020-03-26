import { useEffect, useRef } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

import { Video } from "../components/Video/Video";
import { VideoWithSubtitles } from "../components/Video/VideoWithSubtitles";
import { Audio } from "../components/Audio/Audio";
import { AudioWithTranscript } from "../components/Audio/AudioWithTranscript";

const mediaWrapper = () => {
  const mainPageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mainPageRef.current.focus();
    }, 1000);
  });

  return (
    <Layout>
      <PageTitle title="media" />
      <div
        className="inner-container"
        aria-labelledby="page-heading"
        ref={mainPageRef}
        tabIndex="-1"
      >
        <h1 id="page-heading">Audio and Video</h1> <h2>Video component</h2>
              
        <Video />
              <h2>Video with subtitles</h2>
              
        <VideoWithSubtitles />
              <h2>Audio component</h2>
              
        <Audio />
              <h2>Audio with text transcript</h2>
              
        <AudioWithTranscript />
      </div>
    </Layout>
  );
};

export default mediaWrapper;
