import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
     <a href="/">
  <img className="logo"alt= "Logo"  src={ LOGO_URL}/>


</a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;