import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import houseLogo from "../../../assets/house.PNG";
import ConnectWalletModal from "../../ConnectWalletModal/ConnectWalletModal";
import MenuIcon from "../../Icons/SocialIcons/MenuIcon";
import classes from "./TopNavigation.module.css";

const TopNavigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const openConnectWalletModalHandler = () => {
    setOpenModal(true);
  };

  const closeConnectWalletModalHandler = () => {
    setOpenModal(false);
  };

  const openSideBarHandler = () => {
    setOpenSideBar(true);
  };

  const closeSideBarHandler = () => {
    setOpenSideBar(false);
  };

  return (
    <Fragment>
      <nav className={classes["top-nav"]}>
        <div className={classes["logo__box"]}>
          <div className="logo__img">
            <img src={houseLogo} alt="logo" />
          </div>
          <h1>Metabnb</h1>
        </div>
        <ul className={openSideBar ? classes["open-side-bar"] : ""}>
          <li className={classes["close-btn"]}>
            <span onClick={closeSideBarHandler}>&times;</span>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/place-to-stay"
            >
              Place to stay
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
            >
              NFTs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
            >
              Community
            </NavLink>
          </li>
        </ul>

        <div className={classes.actions}>
          <button onClick={openConnectWalletModalHandler}>
            Connect wallet
          </button>
          <MenuIcon className={classes.menu} onClick={openSideBarHandler} />
        </div>
      </nav>
      {openModal && (
        <ConnectWalletModal onClose={closeConnectWalletModalHandler} />
      )}
    </Fragment>
  );
};

export default TopNavigation;
