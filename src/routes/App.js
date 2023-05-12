import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pokemon from "./DetailPage/DetailPage";

const App = () => {
  const [data, setData] = React.useState(null);

  // https://jsonplaceholder.typicode.com/users
  // https://swapi.dev/api/people
  // https://pokeapi.co/api/v2/pokemon

  const dataFetch = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    setData(data);
  };

  React.useEffect(() => {
    dataFetch();
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/test" element={<p>test</p>} />
          <Route path="/pokemon/:pokemon" element={<Pokemon/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
