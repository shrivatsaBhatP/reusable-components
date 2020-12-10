import Arrow from "./Arrow";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pokemon/Arrow",
  component: Arrow,
};

export const Arrow_1 = () => <Arrow direction={0} />;
export const Arrow_2 = () => <Arrow direction={90} />;
export const Arrow_3 = () => <Arrow direction={180} />;
export const Arrow_4 = () => <Arrow direction={270} />;
