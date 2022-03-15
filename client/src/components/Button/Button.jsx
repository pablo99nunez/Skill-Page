import React from "react";
import "./Button.scss";

export default function Button(props) {
  const { children } = props;
  return <button {...props}>{children}</button>;
}
