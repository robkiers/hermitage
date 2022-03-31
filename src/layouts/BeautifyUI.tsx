// import nightsong from "../assets/nightsong.mp3";


const BeautifyUI = (props: any) => {
  const { toggleUI } = props;

  const nightsong = require("../assets/nightsong.mp3");

  return (
    <div className="beautifyUI">
      <div>
        {/* <button className="circular">play</button> */}
        {/* <button className="toggleUI">hide UI</button> */}
      </div>
      {/* <div>Click in this corner again to display UI</div> */}
      <audio src={nightsong} controls autoPlay/>
    </div>
    );
  }
// <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
// src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/7708422&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/wowcataclysm" title="wowcataclysm" 
// target="_blank" style="color: #cccccc; text-decoration: none;">wowcataclysm</a> · <a href="https://soundcloud.com/wowcataclysm/nightsong" 
// title="Nightsong" target="_blank" style="color: #cccccc; text-decoration: none;">Nightsong</a></div>
export default BeautifyUI;

// https://soundcloud.com/wowcataclysm/nightsong?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing

            {/* <source src="horse.ogg" type="audio/ogg"> */}
