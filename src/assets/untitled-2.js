_________________________

export default function App() {
  function getWindowWidth() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function handleClick(e) {

    if (zoomedIn === 0) {
      setZoomstate(1);
      setTimeout(() => {
        setZoomstate(2);
      }, 1000);
    } else if (zoomedIn === 1) {
      setZoomstate(2);
    } else if (zoomedIn === 2) {
      setZoomstate(3);
      setTimeout(() => {
        setZoomstate(0);
      }, 1000);
    } else if (zoomedIn === 3) {
      setZoomstate(0);
    }
  }

  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [zoomedIn, setZoomstate] = useState(0);

  useEffect(() => {
    const screenSize = getWindowWidth();

    function handleMouseMovement(e) {
      let positionX = e.pageX - screenSize.width / 2;
      let positionY = e.pageY - screenSize.height / 2;

      setXOffset(positionX / 10);
      setYOffset(positionY / 10);
    }

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, [xOffset, yOffset, zoomedIn]);

  function setStyle(props, id) {
    let xPosition = xOffset;
    let yPosition = yOffset;

    if (zoomedIn === 1 || zoomedIn === 2) {
      if (id === "ruins") {
        xPosition = xPosition - 200;
        yPosition = yPosition + 100;
      } else if (id === "commons") {
        xPosition = xPosition + 1100;
      } else if (id === "temple") {
        xPosition = xPosition + 3000;
        yPosition = yPosition - 1000;
      }
    }

    let style;

    if (zoomedIn === 1) {
      style = {
        filter: 'blur(2px)',
        transition: "transform 1s linear, filter 1s ease-in-out",
        transform: `translate(${xPosition * props}px, ${
          yPosition * props
        }px) scale(2)`,
      };
    } else if (zoomedIn === 2) {
      style = {
        transform: `translate(${xPosition * props}px, ${
          yPosition * props
        }px) scale(2)`,
      };
    } else if (zoomedIn === 3) {
      style = {
        filter: 'blur(2px)',
        transition: "transform 1s linear, filter 1s ease-in-out",
        transform: `translate(${xPosition * props}px, ${yPosition * props}px)`,
      };
    } else {
      style = {
        transform: `translate(${xPosition * props}px, ${yPosition * props}px)`,
      };
    }
    return style;
  }