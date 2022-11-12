import NFTCard from "./NFTCard";
import styles from "./NFTCardSection.module.css";
import DummyImage from "../../assets/first-section-images/first-section-img-3";

const nftData = [
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
  { imgSrc: DummyImage },
];

const NFTCardSection = () => {
  return (
    <div className={styles["card-section"]}>
      {nftData.map((item) => (
        <NFTCard imgSrc={item.imgSrc} />
      ))}
    </div>
  );
};

export default NFTCardSection;
