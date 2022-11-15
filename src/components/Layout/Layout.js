import TopNavigation from "./TopNavigation/TopNavigation";
import styles from "./Layout.module.css";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <TopNavigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
