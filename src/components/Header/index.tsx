import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="header_title">React Exercises</h1>
      </Link>{" "}
    </div>
  );
};

export default Header;
