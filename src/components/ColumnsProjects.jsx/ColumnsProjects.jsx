import React from "react";

export default function ColumnsProjects({ children, columns }) {
  return (
    <>
      <div
        ref={(el) => (columns.current[0] = el)}
        className="dinamicColumns"
      ></div>
      <div
        ref={(el) => (columns.current[1] = el)}
        className="dinamicColumns"
      ></div>
      <div ref={(el) => (columns.current[2] = el)} className="dinamicColumns">
        {children}
      </div>
      <div
        ref={(el) => (columns.current[3] = el)}
        className="dinamicColumns"
      ></div>
      <div
        ref={(el) => (columns.current[4] = el)}
        className="dinamicColumns"
      ></div>
    </>
  );
}
