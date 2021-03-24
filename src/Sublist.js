import React from "react";
import { Link } from "react-router-dom";

const Sublist = ({ title, items }) => {
  return (
    <>
      <h3 className="text-scarlet-500 font-bold">{title}: </h3>
      <ul>
        {items.map((item) => (
          <li
            className="ml-5 underline text-sunglow-300 hover:text-sunglow-400"
            key={item.id}
          >
            <Link to={item.url}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sublist;
