import PropTypes from "prop-types";
import React from "react";
import styles from "./Arrow.module.css";

/**
 * This is component for Dropdown Arrow Icon.
 * @param {number} direction - The Arrow direction in degree
 */

interface ArrowProps {
  direction: number;
}

const Arrow = ({ direction }: ArrowProps) => {
  return (
    <div
      className={styles.Arrow}
      style={{ transform: `rotate(calc(${direction}deg - 45deg ))` }}
    ></div>
  );
};

Arrow.propTypes = {
  direction: PropTypes.number,
};
export default Arrow;
