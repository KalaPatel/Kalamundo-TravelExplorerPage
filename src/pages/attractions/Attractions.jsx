// import styles from "../pages/scssPages/About.module.scss";
import { Outlet } from "react-router-dom";
import AttractionList from "../../components/attractionsList/AttractionList";

export default function Accomodations() {
  return (
    <>
      <AttractionList />
      <Outlet />
    </>
  );
}
