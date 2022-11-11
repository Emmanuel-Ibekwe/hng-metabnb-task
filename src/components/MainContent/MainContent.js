import { Fragment } from "react";
import styles from "./MainContent.module.css";
import dummyImage from "../../assets/dummy-image.jfif";

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
          <div className="img__div">
            <img src={dummyImage} id={styles.img1} alt="dummy image" />
            <img src={dummyImage} id={styles.img2} alt="dummy image" />
            <img src={dummyImage} id={styles.img3} alt="dummy image" />
            <img src={dummyImage} id={styles.img4} alt="dummy image" />
          </div>
        </div>
      </section>
      <div></div>
    </Fragment>
  );
};

export default MainContent;
