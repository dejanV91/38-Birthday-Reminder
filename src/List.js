import React from "react";
import data from "./data";

const List = () => {
  return data.map((person) => {
    const { id, name, image, age } = person;

    return (
      <>
        <article key={id} className="person">
          <img src={image} alt="image" />
          <div>
            <h4>{name}</h4>
            <p>{age + " years"}</p>
          </div>
        </article>
      </>
    );
  });
};

export default List;
