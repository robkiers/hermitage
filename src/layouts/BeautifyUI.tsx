import Player from "../components/AudioPlayer";

const BeautifyUI = (props: any) => {
  const { toggleUI, showUI } = props;

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

export default BeautifyUI;
