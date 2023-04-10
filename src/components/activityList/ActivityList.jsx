import styles from "./index.module.scss";
import { GET } from "../../utils/https.js";
import { useState, useEffect } from "react";
import ActivityCards from "../activityCards/ActivityCards";
import { activitiesMock } from "../../mock/activitiesMock.js";
const ActivityList = () => {
  const [activityList, setActivityList] = useState([]);
  useEffect(() => {
    GET("activities").then((data) => {
      if (data.statusCode >= 400 && data.statusCode < 500) {
        setActivityList(activitiesMock);
        console.log("sono il mock");
      } else setActivityList(data.results);
    });
  }, []);

  return (
    <div className={styles.ActivityCards}>
      {activityList.map((item, i) => (
        <ActivityCards data={item} index={i} key={item.name} />
      ))}
    </div>
  );
};

export default ActivityList;
