import React from "react";

const SectionHead = (props) => {
  return (
    <div>
      <div className={`d-flex justify-content-center justify-content-md-${props.direction} align-items-center`}>
        <span className="h-line w-25 bg-info"></span>
        <span className="text-info fw-bold mx-auto mx-md-1 fs-5">{props.main}</span>
        <span className="h-line w-25 bg-info"></span>
      </div>
      <p className={`text-center text-md-${props.direction} text-secondary h1 fw-bold`}>{props.sub}</p>
    </div>
  );
};

export default SectionHead;
