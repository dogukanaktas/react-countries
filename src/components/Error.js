import React from "react";
import styles from "../css/Error.module.css";
import {BsArrowLeft} from "react-icons/bs"

const Error = ({history}) => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.error}>404 Error Page</h1>
      <h2 className={styles.sorry}>Sorry, this page doesn't exist</h2>
      <h3 className={styles.goBackError} onClick={() => history.goBack()}>
      <BsArrowLeft className={styles.goBackArrow} />   <span className={styles.goBackSpan}>Go Back</span>
      </h3>
    </div>
  );
};

export default Error;
