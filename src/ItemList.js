import React from "react";
import { Link } from "react-router-dom";

//list of previously explored films
const ItemList = ({ items, title }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-gradient-only font-black text-6xl text-center leading-relaxed tracking-wider">
        {title}
      </h1>
      {items.length !== 0 ? (
        <ul className="text-sunglow-300 underline" style={{ fontSize: "120%" }}>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>
                {item.name}{" "}
                <small className="text-white text-sunglow-300">
                  (/{item.id})
                </small>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't explored any items of this type yet.</p>
      )}
    </div>
  );
};

export default ItemList;
