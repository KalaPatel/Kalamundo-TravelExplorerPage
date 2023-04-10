import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ styleType }) => {
  return (
    <div className={`${styles.menuWrapper} ${styles[styleType]}`}>
      <ul className={styles.menuList}>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/activity" className={styles.link}>
            Activity
          </Link>
        </li>
        <li>
          <Link to="/attraction" className={styles.link}>
            Attraction
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
