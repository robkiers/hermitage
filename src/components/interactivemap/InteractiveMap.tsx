import "./interactiveMap.scss";

function InteractiveMap() {


  // let container = document.querySelector('.imapContainer');
  // let width = container.offsetWidth;
  // let height = container.offsetHeight;


  const locationList = [
    {
      description: "",
      locationTopLeft: { x: 10, y: 20 },
      locationBottomRight: { x: 10, y: 20 },
    },
  ];

  return <div className="imapContainer"></div>;
}

export default InteractiveMap;
