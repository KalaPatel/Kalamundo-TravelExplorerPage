import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { GoHeart } from "react-icons/go";

const ActivityCards = ({ data, index }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(data.name);
  };
  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <div className={styles.image}>
        <img
          src={"https://streetviewhub.com/shots?" + index}
          alt="randomNatureImage"
        />
      </div>
      <div className={styles.textWrapper}>
        <h4>{data.name}</h4>
        {data.tags.map((element) => (
          <span key={element}>{`${element}`.split(" ")[0]}</span>
        ))}
      </div>
      <div className={styles.heartWrapper}>
        <GoHeart className={styles.heartIcon} />
      </div>
    </div>
  );
};

export default ActivityCards;
