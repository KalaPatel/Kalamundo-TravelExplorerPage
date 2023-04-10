import styles from "./index.module.scss";

import Navbar from "../../components/navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <Hero />
      <div className={styles.outletSection}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
