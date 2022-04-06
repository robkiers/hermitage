// import nightsong from "../assets/nightsong.mp3";
// import { useEffect, useState } from "react";
import Player from "../components/AudioPlayer";

const BeautifyUI = (props: any) => {
  const { toggleUI, showUI } = props;

  // const [audioPlay, setAudioPlay] = useState(false);
  // const nightsong = new Audio(require("../assets/nightsong.mp3"));

  // useEffect(() => {
  //   console.log(audioPlay, nightsong);

  //   nightsong.paused ? nightsong.play() : nightsong.pause();
  //   console.log(audioPlay, nightsong.paused);

  // }, [audioPlay]);

  // function toggleMusic() {
  //   setAudioPlay(!audioPlay);
  // }

  return (
    <div className="beautifyUI">
      <div className={showUI ? "flex" : "flex hidden"}>
        <button className="circular" onClick={() => toggleUI()}>
          ▬
        </button>
        <Player url={"../assets/nightsong.mp3"}></Player>
      </div>
      <div
        className={showUI ? "cornerInteraction hidden" : "cornerInteraction"}
        onClick={() => toggleUI()}
      >
        <span>Click in this corner again to display UI</span>
      </div>
    </div>
  );
};
// <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
// src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/7708422&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/wowcataclysm" title="wowcataclysm"
// target="_blank" style="color: #cccccc; text-decoration: none;">wowcataclysm</a> · <a href="https://soundcloud.com/wowcataclysm/nightsong"
// title="Nightsong" target="_blank" style="color: #cccccc; text-decoration: none;">Nightsong</a></div>
// https://soundcloud.com/wowcataclysm/nightsong?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing

export default BeautifyUI;
