import styles from "./SubNavigation.module.css";

const SubNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a>Restuarant</a>
        </li>
        <li>
          <a>Cottage</a>
        </li>
        <li>
          <a>Castle</a>
        </li>
        <li>
          <a>fantast city</a>
        </li>
        <li>
          <a>Beach</a>
        </li>
        <li>
          <a>Carbins</a>
        </li>
        <li>
          <a>Off-grid</a>
        </li>
        <li>
          <a>Farm</a>
        </li>
      </ul>
      <div className={styles.location}>
        <span>Location</span>
      </div>
    </nav>
  );
};

export default SubNavigation;
