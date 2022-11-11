import houseLogo from "../../assets/house.png";
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
    </nav>
  );
};

export default TopNavigation;
