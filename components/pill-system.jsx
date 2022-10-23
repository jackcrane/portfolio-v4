import { useEffect, useState } from "react";
import styles from "../assets/styles/pill-row.module.css";

const PillRow = () => {
  useEffect(() => {
    setpillcount([...Array(Math.floor(window.innerWidth / 40))]);
  }, []);
  const [pillcount, setpillcount] = useState([]);

  return (
    <div className={styles.pillrow} style={{animationDelay: `${Math.random()}s`}}>
      {pillcount.map((_, i) => (
        <div style={{width: Math.random() * (70 - 30) + 30}} className={styles.pill} key={i} />
      ))}
    </div>
  )
}

const PillSystem = () => {
  useEffect(() => {
    setpillcount([...Array(Math.floor(window.innerHeight * .95 / 31))]);
  }, []);
  const [pillcount, setpillcount] = useState([]);

  return (
    <div className={styles.pillsystem}>
      {pillcount.map((_, i) => (
        <PillRow key={i} />
      ))}
    </div>
  )
}

export { PillRow, PillSystem }