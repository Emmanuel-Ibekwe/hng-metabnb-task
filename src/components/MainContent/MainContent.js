import { Fragment } from "react";
import styles from "./MainContent.module.css";
import firstSectionImg1 from "../../assets/first-section-images/first-section-img-1.png";
import firstSectionImg2 from "../../assets/first-section-images/first-section-img-2.png";
import firstSectionImg3 from "../../assets/first-section-images/first-section-img-3.png";
import firstSectionImg4 from "../../assets/first-section-images/first-section-img-4.png";

const MainContent = () => {
  return (
    <Fragment>
      <section className={styles["first-section"]}>
        <div className={styles["right-sub-section"]}>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span>Metaverse</span>
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
      <div></div>
    </Fragment>
  );
};

export default MainContent;
