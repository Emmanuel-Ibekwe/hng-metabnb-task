import styles from "./NFTCard.module.css";

const NFTCard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div className={styles["img-box"]}>
        <img src={props.imgSrc} />
      </div>
      <div className={styles["details"]}>
        <div className={styles["main-details"]}>
          <div>Desert King</div>
          <div>2345km away</div>
          <div></div>
        </div>
        <div className={styles["additional-details"]}>
          <div>
            <strong>1MBT per night</strong>
          </div>
          <div>available for 2weeks stay</div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
