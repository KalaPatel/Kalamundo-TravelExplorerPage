import styles from "./index.module.scss";
import { GET } from "../../utils/https.js";
import { useState, useEffect } from "react";

import { attractionsMock } from "../../mock/attractionsMock";
import AttractionCard from "../attractionCard/ActivityCards";
const AttractionList = () => {
  const [attractionsList, setAttractionList] = useState([]);
  useEffect(() => {
    GET("attractions").then((data) => {
      if (data.statusCode >= 400 && data.statusCode < 500) {
        setAttractionList(attractionsMock);
        console.log("sono il mock");
      } else setAttractionList(data.results);
    });
  }, []);

  return (
    <div className={styles.AttractionList}>
      {attractionsList.map((item, i) => (
        <AttractionCard data={item} index={i} key={item.name} />
      ))}
    </div>
  );
};

export default AttractionList;
