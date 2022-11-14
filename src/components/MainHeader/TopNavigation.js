import houseLogo from "../../assets/house.png";
import MenuIcon from "../Icons/SocialIcons/MenuIcon";
import classes from "./TopNavigation.module.css";

const TopNavigation = () => {
  return (
    <nav className={classes["top-nav"]}>
      <div className={classes["logo__box"]}>
        <div className="logo__img">
          <img src={houseLogo} alt="logo" />
        </div>
        <h1>Metabnb</h1>
      </div>
      <ul>
        <li className={classes["close-btn"]}>
          <span>&times;</span>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Place to stay</a>
        </li>
        <li>
          <a>NFTs</a>
        </li>
        <li>
          <a>Community</a>
        </li>
      </ul>

      <button>Connect wallet</button>

      <MenuIcon className={classes.menu} />
    </nav>
  );
};

export default TopNavigation;
