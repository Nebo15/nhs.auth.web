import React from "react";

import styles from "./styles.css";

const ColoredText = ({ color, children }) => (
  <span className={styles[color]}>{children}</span>
);

export default ColoredText;
