import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./ConnectWalletModal.module.css";
import metamaskIcon from "../../assets/metamask-colored-icon.png";
import walletConnectIcon from "../../assets/wallet-connect.png";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles["modal-overlay"]}>
      <header>
        <h3>Connect Wallet</h3>
        <span onClick={props.onClose}>&times;</span>
      </header>
      <main>
        <p>Choose your preferred wallet</p>
        <div className={styles.wallets}>
          <div className={styles["each-wallet"]}>
            <div className={styles.logo}>
              <img id={styles.metamask} src={metamaskIcon} />
              <strong>Metamask</strong>
            </div>

            <span>&#62;</span>
          </div>
          <div className={styles["each-wallet"]}>
            <div className={styles.logo}>
              <img id={styles["wallet-connect"]} src={walletConnectIcon} />
              <strong>WalletConnect</strong>
            </div>

            <span>&#62;</span>
          </div>
        </div>
      </main>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const ConnectWalletModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default ConnectWalletModal;
