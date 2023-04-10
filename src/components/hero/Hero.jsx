import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");
  const onHandleInputValue = (e) => {
    setValueInput(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${valueInput}`);
    setValueInput("");
  };

  return (
    <div className={styles.Hero}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        alt="hero image"
      />
      <h1 className={styles.heroText}>Plan your jorney!</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Cerca un'attività/attrazione"
          onChange={onHandleInputValue}
          value={valueInput}
          className={styles.input}
        />
      </form>
    </div>
  );
};

export default Hero;
