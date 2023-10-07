import React from "react";
import "./style.css";

export default function CardExperience({
  work,
  link,
  nameOfWork,
  date,
  description,
  ref,
  className,
}) {
  return (
    <div
      ref={ref}
      className="container_card animate__animated  animate__fadeIn"
    >
      <div className="title_link_card">
        <h3>{work}</h3>
        <a target="_blank" href={link}>
          {nameOfWork}
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="LaunchIcon"
          >
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
          </svg>
        </a>
      </div>
      <h4 className="date_card">{date}</h4>
      <p className="description_card">{description}</p>
    </div>
  );
}
