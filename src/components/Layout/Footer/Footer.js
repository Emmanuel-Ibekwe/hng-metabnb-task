import styles from "./Footer.module.css";
import metabnbLogo from "../../../assets/metabnb-logo-footer.PNG";
import FacebookIcon from "../../Icons/SocialIcons/FacebookIcon";
import InstagramIcon from "../../Icons/SocialIcons/InstagramIcon";
import TwitterIcon from "../../Icons/SocialIcons/TwitterIcon";
// metabnb-logo-footer.PNG
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles["first-section"]}>
          <img src={metabnbLogo} />
          <div className={styles["socials-row"]}>
            <span>
              <FacebookIcon className={styles.socials} />
            </span>
            <span>
              <InstagramIcon className={styles.socials} />
            </span>
            <span>
              <TwitterIcon className={styles.socials} />
            </span>
          </div>
          <div className={styles.copyright}>&#169; 2022 Metabnb</div>
        </div>

        <div className={styles["community-section"]}>
          <h4>Places</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>

        <div className={styles["places-section"]}>
          <h4>Community</h4>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>

        <div className={styles["about-us-section"]}>
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
