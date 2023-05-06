import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PageResult({ data }) {
  const navigate = useNavigate();
  const [dateInput, setDateInput] = useState("");
  const [searchParams] = useSearchParams();
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
    navigate(`?q=${data.name}&date=${dateInput}&time=${timeInput}`);
    setPopupVisible(() => true);
    setTimeInput("");
    setDateInput("");
  };

  return (
    <div className={styles.wrapper} key={data.name}>
      <h1>{data.name}</h1>
      <div className={styles.container}>
        <img
          src="https://streetviewhub.com/shots"
          alt={data.name}
          className={styles.img}
        />
        <div className={styles.cardInfo}>
          <h4>Activity type:</h4>
          <ul className={styles.list}>
            {data["@type"].map((element) => (
              <li key={element}>- {element}</li>
            ))}
          </ul>
          <hr />
          <h4>Contacts:</h4>

          <span className={styles.contract}>
            {data.address.addressLocality}, {data.address.addressRegion},
            {` ${data.address.addressCountry}`}
          </span>

          <p className={styles.contract}>
            <span className={styles.span}>Tel:</span> {data.telephone}
          </p>
          <p className={styles.contract}>
            <span className={styles.span}>More info:</span>
          </p>
          <a
            className={styles.contract}
            href="https://www.theadventureisland.com/"
          >
            {data.url}
          </a>
          <form onSubmit={onHadleSubmit}>
            <input type="date" onChange={onHandleDateInput} value={dateInput} />
            <input type="time" onChange={onHandleTimeInput} value={timeInput} />
            <input
              type="submit"
              value="controlla disponibilità"
              className={styles.submitBtn}
            />
          </form>
          {popupVisible && (
            <p>
              {`Il ${data.name} alle ore ${searchParams.get("time")} il giorno
                  ${searchParams.get("date")} è disponibile!`}
            </p>
          )}
        </div>
      </div>
      <iframe
        className={styles.googleMap}
        src={`https://maps.google.com/maps/?q=+${data.geo.latitude}+,+${data.geo.longitude}&output=embed`}
      ></iframe>
    </div>
  );
}
