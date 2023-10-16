import React from "react";
import Instagram from "../../icons/Instagram";
import "./style.css";

export default function Social({ children }) {
  return (
    <div className="social_container">
      <div className="social">{children}</div>
    </div>
  );
}
