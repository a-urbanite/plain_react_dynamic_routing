import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./DetailPage.css";

const Pokemon = () => {
  const location = useLocation();
  const dataObj = location.state;

  const [data, setData] = React.useState(null);

  const dataFetch = async () => {
    console.log(dataObj.url);
    const res = await fetch(dataObj.url);
    const data = await res.json();
    setData(data);
  };

  React.useEffect(() => {
    dataFetch();
  }, []);

  if (!data) {
    return <p>waiting...</p>;
  }

  return (
    <div className="page_container">
      <div className="detailcard_container">
        <h1 className="title">{data.name.toUpperCase()}</h1>
        <ul>
          <li>Base experience: {data.base_experience}</li>
          <li>Height: {(data.height / 10).toFixed(1)}m</li>
          <li>Weight: {(data.weight / 10).toFixed(1)}kg</li>
          <li>
            Types:{" "}
            {data.types.map((type) => {
              return <span>{type.type.name} </span>;
            })}
          </li>
        </ul>
      </div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </div>
  );
};

export default Pokemon;
