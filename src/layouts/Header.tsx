import logo from "../assets/logo.png";
import "./Header.scss";

const Header = (props: any) => {
  const { zoom } = props;

  return (
    <div className="header margin-top">
      <div className="logoContainer" onClick={() => zoom("zoomDefault")}>
        <img className="headerLogo" src={logo} alt="hermitage logo" />
        <span className="headerTitle">
          Moonrise <br /> Hermitage
        </span>
      </div>
      <nav>
        <button onClick={() => zoom("zoomTemple")}>Temple</button>
        <button onClick={() => zoom("zoomCommons")}>Commons</button>
        <button onClick={() => zoom("zoomOak")}>Central Oak</button>
        {/* <button onClick={() => }>OC</button> */}
        {/* <button onClick={() => zoom("zoomArlien")}>Arlièn</button> */}
      </nav>
    </div>
  );
};

export default Header;
