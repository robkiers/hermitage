import logo from "../assets/logo.png";
import "./Header.scss";

const Header = (props: any) => {
  const { navigate } = props;

  return (
    <div className="header margin-top">
      <div className="logoContainer" onClick={() => navigate("MAIN")}>
        <img className="headerLogo" src={logo} alt="hermitage logo" />
        <span className="headerTitle">
          Moonrise <br /> Hermitage
        </span>
      </div>
      <nav>
        <button onClick={() => navigate("OAK")}>Central Oak</button>
        <button onClick={() => navigate("TEMPLE")}>Temple</button>
        <button onClick={() => navigate("COMMONS")}>Commons</button>
      </nav>
      <div>
        <button onClick={() => navigate("OC")}>OC</button>
      </div>
    </div>
  );
};

export default Header;
