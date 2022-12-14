import React from "react";

function Entry(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji"> {props.emoji} </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </dl>
  );
}
export default Entry;

//entry holding prop names and ctaching them
