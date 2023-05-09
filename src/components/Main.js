import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto">
      <p className="text-center text-yellow-600 font-bold  mb-4 pt-10">
        Select Movies
      </p>
      <div className="grid grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <div key={item.show.id} className="bg-gray-200 p-2">
            {item.show.image && (
              <Link to={`/movies/${item.show.id}`}>
                <img
                  src={item.show.image.medium}
                  alt={item.show.name}
                  className="mb-2 ml-10 cursor-pointer"
                />
              </Link>
            )}
            <p className="font-bold text-blue-600">{item.show.name}</p>
            <p className="text-gray-600">{item.show.type}</p>
            <p className="text-green-500">{item.show.status}</p>
            <p className="text-sm">{item.show.language}</p>
            <p className="text-sm text-red-500">{item.show.rating.average}</p>
            <p className="text-sm text-gray-500">{item.show.schedule.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
