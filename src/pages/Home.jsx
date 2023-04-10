import styles from "./scssPages/Home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.Home}>
      <Link to="/activity">
        <div className={styles.actvityCard}>
          <span>Activity</span>
        </div>
      </Link>
      <Link to="/attraction">
        <div className={styles.cityCard}>
          <span>Attraction</span>
        </div>
      </Link>
    </div>
  );
}

export default Home;
