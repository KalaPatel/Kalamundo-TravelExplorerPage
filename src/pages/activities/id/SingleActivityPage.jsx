import styles from "./index.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../../../utils/https.js";

import { activitiesMock } from "../../../mock/activitiesMock";

export default function SingleActivityPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activityInfo, setActivityInfo] = useState([]);
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const onHandleTimeInput = (e) => {
    setTimeInput(() => e.target.value);
  };

  const onHandleDateInput = (e) => {
    setDateInput(() => e.target.value);
  };

  const onHadleSubmit = (e) => {
    e.preventDefault();
    navigate(`?date=${dateInput}&time=${timeInput}`);
    setPopupVisible(() => true);
    setTimeInput("");
    setDateInput("");
  };

  const { id } = useParams();
  useEffect(() => {
    GET(`activities?$filter=name%20eq%20%27${id}%27`).then((data) => {
      if (data.statusCode <= 400) {
        setActivityInfo(data.results);
      } else {
        const filteredActivity = activitiesMock.filter(
          (item) => item.name == `${id}`
        );
        setActivityInfo(filteredActivity);
      }
    });
  }, []);

  return (
    <>
      {activityInfo.length > 0 ? (
        activityInfo.map((item) => (
          <div className={styles.wrapper} key={item.name}>
            <h1>{item.name}</h1>
            <div className={styles.container}>
              <img
                src="https://streetviewhub.com/shots"
                alt={item.name}
                className={styles.img}
              />
              <div className={styles.cardInfo}>
                <h4>Activity type:</h4>
                <ul className={styles.list}>
                  {item["@type"].map((element) => (
                    <li key={element}>- {element}</li>
                  ))}
                </ul>
                <hr />
                <h4>Contacts:</h4>

                <span className={styles.contract}>
                  {item.address.addressLocality}, {item.address.addressRegion},
                  {` ${item.address.addressCountry}`}
                </span>

                <p className={styles.contract}>
                  <span className={styles.span}>Tel:</span> {item.telephone}
                </p>
                <p className={styles.contract}>
                  <span className={styles.span}>More info:</span>
                </p>
                <a
                  className={styles.contract}
                  href="https://www.theadventureisland.com/"
                >
                  {item.url}
                </a>
                <form onSubmit={onHadleSubmit}>
                  <input
                    type="date"
                    onChange={onHandleDateInput}
                    value={dateInput}
                  />
                  <input
                    type="time"
                    onChange={onHandleTimeInput}
                    value={timeInput}
                  />
                  <input
                    type="submit"
                    value="controlla disponibilità"
                    className={styles.submitBtn}
                  />
                </form>
                {popupVisible && (
                  <p>
                    {`Il ${item.name} alle ore ${searchParams.get(
                      "time"
                    )} il giorno
                    ${searchParams.get("date")} è disponibile!`}
                  </p>
                )}
              </div>
            </div>
            <iframe
              className={styles.googleMap}
              src={`https://maps.google.com/maps/?q=+${item.geo.latitude}+,+${item.geo.longitude}&output=embed`}
            ></iframe>
          </div>
        ))
      ) : (
        <p>Nessun risultato trovato. Provate ad essere più specifici </p>
      )}
    </>
  );
}
