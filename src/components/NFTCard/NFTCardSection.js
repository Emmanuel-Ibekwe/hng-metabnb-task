import NFTCard from "./NFTCard";
import styles from "./NFTCardSection.module.css";

const NFTCardSection = () => {
  return (
    <div className={styles["card-section"]}>
      {nftArr.map((item) => (
        <NFTCard imgSrc={item.imgSrc} />
      ))}
    </div>
  );
};

export default NFTCardSection;
