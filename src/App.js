import React from 'react';
import './App.css';
import Row from "./Row";
import response from "./response";
import Banner from "./Banner";

function app() {
  return (
    <div className="app">
      <Banner/>
      <Row title="Trending" fetchUrl={response.fetchTrending} isLarge/>
      <Row title="TopRated" fetchUrl={response.fetchTopRated}/>
      <Row title="Horror" fetchUrl={response.fetchHorror}/>
      <Row title="War" fetchUrl={response.fetchWar}/>
    </div>
  );
}

export default app;
//b56b65ffb42acdecd4a066321768364d