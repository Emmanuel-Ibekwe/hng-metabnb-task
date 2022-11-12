import { Fragment } from "react";
import styles from "./MainContent.module.css";
import firstSectionImg1 from "../../assets/first-section-images/first-section-img-1.png";
import firstSectionImg2 from "../../assets/first-section-images/first-section-img-2.png";
import firstSectionImg3 from "../../assets/first-section-images/first-section-img-3.png";
import firstSectionImg4 from "../../assets/first-section-images/first-section-img-4.png";
import thirdSectionImg1 from "../../assets/third-section-images/third-section-img-1.png";
import thirdSectionImg2 from "../../assets/third-section-images/third-section-img-2.png";
import thirdSectionImg3 from "../../assets/third-section-images/third-section-img-3.png";

import MetaMaskIcon from "../Icons/MetaMaskIcon";
import OpenSeaIcon from "../Icons/OpenSeaIcon";
import MbTokenIcon from "../Icons/MbTokenIcon";
import NFTCardSection from "../NFTCard/NFTCardSection";

const MainContent = () => {
  return (
    <Fragment>
      <section className={styles["first-section"]}>
        <div className={styles["right-sub-section"]}>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span> Metaverse</span>
          </h1>
          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get achance to turn your imagination to reality at your
            comfort zone.
          </p>

          <div className={styles["search-box"]}>
            <input type="text" placeholder="Search for location" />
            <button>Search</button>
          </div>
        </div>
        <div className={styles["left-sub-section"]}>
          <div className={styles["images-container"]}>
            <div className={`${styles["img-box-alt"]}`}>
              <img src={firstSectionImg1} alt="dummy" />
              <img src={firstSectionImg2} alt="dummy" />
            </div>
            <div className={`${styles["img-box"]} `}>
              <img src={firstSectionImg3} alt="dummy" />
              <img src={firstSectionImg4} alt="dummy" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles["dividing-section"]}>
        <div className={styles["mb-token"]}>
          <span>
            <MbTokenIcon />
          </span>
          MBToken
        </div>
        <div className={styles.metamask}>
          <span>
            <MetaMaskIcon />
          </span>
          MetaMask
        </div>
        <div className={styles["open-sea"]}>
          <span>
            <OpenSeaIcon />
          </span>
          OpenSea
        </div>
      </section>
      <section className={styles["second-section"]}>
        <h3>Inspiration for your next adventure</h3>
        <NFTCardSection />
      </section>
      <section className={styles["third-section"]}>
        <div className={styles.content}>
          <p className={styles.heading}>Metabnb NFTs</p>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <div className={styles.actions}>
            <button>Learn more</button>
          </div>
        </div>
        <div className={styles["img-section"]}>
          <div className={styles["img-box"]}>
            <img src={thirdSectionImg1} id={styles["img__1"]} />
          </div>
          <div className={styles["img-box"]}>
            <img src={thirdSectionImg2} id={styles["img__2"]} />
          </div>
          <div className={styles["img-box"]}>
            <img src={thirdSectionImg3} id={styles["img__3"]} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MainContent;
