import React from "react";

type Props = {
  h: number;
};

const Margin = ({ h }: Props) => {
  return <div style={{ height: h + "px" }} />;
};

export default Margin;
