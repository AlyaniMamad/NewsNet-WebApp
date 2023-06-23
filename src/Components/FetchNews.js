import React, { useState } from "react";
import axios from "axios";

const FetchNews = () => {
  const [news, setNews] = useState([]);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const FetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=027555d3f174469da4f934679ab9787c"
      )
      .then((response) => setNews(response.data.articles));
      setIsImageVisible(false);

      const imageElement = document.getElementById("fullscreen-image");

  };


  return (
    <>
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="col-4">
              {/* <button className="btn btn-primary" onClick={FetchNews}>
                Fetch News
              </button> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {isImageVisible && (
                <img
                  src="newsfinal.jpg"
                  alt="First Page Image"
                  className="img-fluid"
                  onClick={FetchNews}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((value) => (
            <div className="col-4" key={value.title}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={value.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href={value.url} className="btn btn-primary">
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchNews;
