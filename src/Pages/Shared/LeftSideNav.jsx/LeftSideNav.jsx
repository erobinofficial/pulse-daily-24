import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftSideNav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log("fetching error to catch data:", error));
  });
  return (
    <div className="p-4 space-y-6 fixed">
      <h2 className="text-2xl">Catergories</h2>
      {categories.map((category) => (
        <NavLink to={`/category/${category.id}`} className="block text-lg pl-4 mb-6 font-semibold text-[#9F9F9F]" key={category.id}>
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}
