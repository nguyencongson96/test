import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RandomQuote from "./RandomQuote/RandomQuote";
import Author from "./Author/Author";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * data.length));
  const [quote, setQuote] = useState({
    author: "",
    content: "",
    tags: [],
    authorSlug: "",
  });

  useEffect(() => {
    fetch("https://api.quotable.io/quotes", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        const list = res.results;
        const randomNumber = Math.floor(Math.random() * (list.length - 1));
        setData(list);
        setRandom(randomNumber);
        setQuote(list[randomNumber]);
      });
  }, []);

  function getRandomQuote() {
    setRandom(Math.floor(Math.random() * (data.length - 1)));
    setQuote(data[random]);
  }

  return (
    <div className="App">
      <Link to="/">
        <button className="btn-random" onClick={getRandomQuote}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H416c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C331.4 52.6 280.1 32 224 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM100.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H32c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C20.6 148.6 0 199.9 0 256c0 10.9 .8 21.5 2.3 32H67.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM445.7 224H380.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H416c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C427.4 363.4 448 312.1 448 256c0-10.9-.8-21.5-2.3-32zM224 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H32c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C116.6 459.4 167.9 480 224 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z" />
          </svg>
          Random
        </button>
      </Link>
      <Routes>
        <Route path="/" element={<RandomQuote quote={quote} />} />
        <Route path="/:authorSlug" element={<Author list={data} />} />
      </Routes>
    </div>
  );
}

export default App;
