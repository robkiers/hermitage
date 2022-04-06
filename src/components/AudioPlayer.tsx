import { useState, useEffect } from "react";
// const nightsong = new Audio(require("../assets/nightsong.mp3"));

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(require("../assets/nightsong.mp3")));
  //   const audio = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio(url) : undefined);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.volume = 0.1;
    audio.loop = true;
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle] as const;
};

const Player = (props: any) => {
  const { url } = props;
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button className="circular" onClick={toggle}>{playing ? "||" : "►"}</button>
    </div>
  );
};

export default Player;
