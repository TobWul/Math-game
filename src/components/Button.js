import React from "react";
import PropTypes from "prop-types";
import styles from "../style/Button.module.scss";
import { cn } from "../lib/helpers";

const Button = ({ children, onClick, on, possibility }) => {
  console.log(possibility);

  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        on ? styles.on : "",
        possibility ? styles.possibility : ""
      )}
    >
      <div className={styles.inner}>{children}</div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default Button;
