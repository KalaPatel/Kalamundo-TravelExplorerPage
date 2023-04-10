// import styles from "../../pages/scssPages/Activity.module.scss";
// import { navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ActivityList from "../../components/activityList/ActivityList";

export default function Activity() {
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("search"));

  return (
    <>
      <ActivityList />
      <Outlet />
    </>
  );
}
