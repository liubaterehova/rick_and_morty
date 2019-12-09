import React from "react";

const TemplatePersonalCard = ({ children }) => {
  return (
    <div
      className="template"
      style={{
        width: "700px",
        margin: "0 auto"
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};
export default TemplatePersonalCard;
