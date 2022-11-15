import { Fragment } from "react";
import houseLogo from "../../../assets/house.png";
import ConnectWalletModal from "../../ConnectWalletModal/ConnectWalletModal";
import MenuIcon from "../../Icons/SocialIcons/MenuIcon";
import classes from "./TopNavigation.module.css";

const TopNavigation = () => {
  return (
    <Fragment>
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

        <div className={classes.actions}>
          <button>Connect wallet</button>
          <MenuIcon className={classes.menu} />
        </div>
      </nav>
      <ConnectWalletModal />
    </Fragment>
  );
};

export default TopNavigation;
