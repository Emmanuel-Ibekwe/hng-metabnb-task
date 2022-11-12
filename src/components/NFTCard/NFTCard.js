import styles from "./NFTCard.module.css";

const NFTCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={style["img-box"]}>
        <img src={props.src} />
      </div>
      <div className={style["details"]}>
        <div className={style["main-details"]}>
          <div>Desert King</div>
          <div>2345km away</div>
        </div>
        <div className={style["additional-details"]}>
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
