import styles from "./index.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbDirections } from "react-icons/tb";
import HamburgerMenu from "../hamburgerMenu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onHandleMenuOpen = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className={styles.Navbar}>
      <h1 className={styles.Name}>
        <Link to="/" className={styles.link}>
          KALAMUNDO
        </Link>
      </h1>

      <TbDirections className={styles.menuIcons} onClick={onHandleMenuOpen} />
      {openMenu ? (
        <HamburgerMenu styleType="show" />
      ) : (
        <HamburgerMenu styleType="hide" />
      )}

      <ul className={styles.listItem}>
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
            Attractions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
