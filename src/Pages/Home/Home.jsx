import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav.jsx/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../Shared/NewsCard/NewsCard";
import { useLoaderData } from "react-router-dom";

export default function Home() {

  const [newsList, setNewsList] = useState([]);
  const data= useLoaderData();
  useEffect(() => {
 
    setNewsList(data)

  }, []);
console.log(data);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="col-span-2">
        <div className="container mx-auto p-4">
      {newsList.map(news => (
        <NewsCard
          key={news._id}
          news={news}
        />
      ))}
    </div>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
}
