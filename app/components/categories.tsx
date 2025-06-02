import React from "react";
import pizza from "../jsons/pizza.json";

export default function Categories() {
  console.log(pizza.pageProps.categories);
  return (
    <div className="flex justify-center gap-5 text-center mt-4">
      {pizza.pageProps.categories.map((e) => (
        <div
          key={e.id}
          className="flex flex-col justify-center items-center pointer"
        >
          <img
            key={e.id}
            src={`https://pizzahouse.ua` + e.image}
            alt={e.title}
            width={30}
            height={30}
          />
          <p className="text-sm mt-2">{e.title}</p>
        </div>
      ))}
    </div>
  );
}
