import React from "react";

const TemplateMainPage = ({ children }) => {
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
export default TemplateMainPage;
