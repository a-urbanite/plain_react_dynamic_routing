import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

function Home({data}) {

  if (!data) {
    return <p>waiting...</p>;
  }

  return (
    <div className="page_container">

      <h1 className="main_title">using JavaScript inbuilt FETCH API</h1>
      <center className="list_container">
        <ul>
          {data.results.map((dataObj, index) => {
            return (
              <Link to={`/pokemon/${dataObj.name}`} state={dataObj}>
                <li key={index}>
                  <div
                    className="card_container"
                    role="button"
                  >
                    <p className="card_title">{dataObj.name}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </center>
    </div>
  );
}

export default Home;
