import styles from "./index.module.scss";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.iconsWrapper}>
        <SlSocialGithub className={styles.icons} />
        <SlSocialInstagram className={styles.icons} />
        <SlSocialFacebook className={styles.icons} />
      </div>
    </div>
  );
};

export default Footer;
