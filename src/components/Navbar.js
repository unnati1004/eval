import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <Link to="/">Table</Link>
      </div>
      <div>
        <Link to="/add-Country">Add Country</Link>
      </div>
      <div>
        <Link to="/add-city">Add City</Link>
      </div>
    </div>
  );
};
