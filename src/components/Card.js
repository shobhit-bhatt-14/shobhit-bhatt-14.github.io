import React from "react";

const Card = (props) => {
  return (
    <div id="card" className="col border border-white p-3 rounded m-3 shadow">
      <p id="line-h" className="text-info m-0">{props.title}</p>
      <p className="text-white m-0">{props.company}</p>
      <p className="text-secondary py-1">{props.timespan}</p>
      <ul className="text-white lh-1">{props.content}</ul>
    </div>
  );
};

export default Card;
