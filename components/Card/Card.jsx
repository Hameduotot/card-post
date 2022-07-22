import React, { useState } from "react";
import styles from "./card.module.css";
function Card({ data, removeHandler }) {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className={styles.container}>
      <img src={data.image} />
      <div className={styles.text}>
        <div className={styles.topcard}>
          <h2>{data.name}</h2>
          <span>{data.price}</span>
        </div>
        <div className={styles.info}>
          <p className={readmore ? styles.readmore : styles.showless}>
            {data.info}
          </p>
          <div>
            <span onClick={() => setReadmore(!readmore)}>
              {!readmore ? "Read more" : "Show less"}
            </span>
          </div>
        </div>
        <div className={styles.button}>
          <button onClick={() => removeHandler(data.id)}>Not Intrested</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
