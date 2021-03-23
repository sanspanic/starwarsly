import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";

//displays list of all people in store
const PersonList = () => {
  const items = useSelector((st) =>
    Object.values(st.people).map((p) => ({ ...p, url: `/people/${p.id}` }))
  );
  return <ItemList title="People" items={items} />;
};

export default PersonList;
