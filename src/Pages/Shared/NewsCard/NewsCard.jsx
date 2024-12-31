import React from 'react';
import { FaBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
// , category, title, image, details, author, time, rating, views 
const NewsCard = ({news}) => {
    const { _id, author, title, image_url, details, rating, total_view} = news;
    console.log(_id);
    
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      {/* First Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-700">
          <p className="font-semibold">{author?.name}</p>
          <p className="text-sm">{author?.published_date}</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn btn-ghost btn-circle text-gray-500">
            <FaBookmark />
          </button>
          <button className="btn btn-ghost btn-circle text-gray-500">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <img src={image_url} alt="news" className="w-full h-48 object-cover rounded-md mb-2" />
        <p className="text-gray-600">
          {details?.substring(0, 100)}...
          <a href={`/news/${_id}`} className="text-blue-500 font-semibold">
            Read more
          </a>
        </p>
      </div>

      {/* Third Section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <FaStar className="text-yellow-400" />
          <span className="text-gray-700 ml-1">{rating?.number}</span>
        </div>
        <p className="text-gray-600 text-sm">{total_view} views</p>
      </div>
    </div>
  );
};

export default NewsCard;
