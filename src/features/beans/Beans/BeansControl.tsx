import { BeansControlProps } from "../types";
import styles from "./Beans.module.css";

const BeansControl: React.FC<BeansControlProps> = ({
  amount,
  status,
  updateAmount,
}: BeansControlProps) => {
  const handleOnClick = (byValue: number) => () => {
    updateAmount(byValue);
  };

  const handleOnClickPlus = handleOnClick(1);
  const handleOnClickMinus = handleOnClick(-1);
  const handleOnClickPlus10 = handleOnClick(10);
  const handleOnClickMinus10 = handleOnClick(-10);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${styles.btn_green}`}
        onClick={handleOnClickMinus10}
      >
        -10
      </button>
      <button
        className={`${styles.btn} ${styles.btn_yellow}`}
        onClick={handleOnClickMinus}
      >
        -
      </button>
      <div className={styles.amount}>{amount}</div>
      <button
        className={`${styles.btn} ${styles.btn_yellow}`}
        onClick={handleOnClickPlus}
      >
        +
      </button>
      <button
        className={`${styles.btn} ${styles.btn_green}`}
        onClick={handleOnClickPlus10}
      >
        +10
      </button>
    </div>
  );
};

export default BeansControl;
