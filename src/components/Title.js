import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="section-title">
      <h1 className="color-title">{props.title}</h1>
    </div>
  );
};

export default Title;
