import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "./DataTable";
// import { sortData } from "./utils";
// import { getCovidData } from "../src/api/DataCovid";
// import Display from "./Display";
// import Display from "./Display";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => {
        // console.log(res);
        return res.json();
        // console.log(data);
      })
      .then((data) => {
        const reqData = data.statewise.map((i) => ({
          state: i.state,
          confirmed: i.confirmed,
          active: i.active,
          deaths: i.deaths,
        }));
        // const sortedData = sortData(reqData);
        setData(reqData);
        // console.log(sortedData);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://api.covid19india.org/data.json")
  //     .then((res) => {
  //       // console.log(res);
  //       return res.json();
  //       // console.log(data);
  //     })
  //     .then((data) => {
  //       const reqData = data.cases_time_series.map((i) => ({
  //         dailyconfirmed: i.dailyconfirmed,
  //         totalconfirmed: i.totalconfirmed,
  //         date: i.date,
  //         totaldeceased: i.totaldeceased,
  //       }));
  //       // const sortedData = sortData(reqData);
  //       setData(reqData);
  //       console.log(reqData);
  //     });
  // }, []);
  // console.log(data);
  return (
    <div className="App">
      <DataTable data={data} />
    </div>
  );
}

export default App;

// const fetchdata = async () => {
//   const resp = await fetch("https://api.covid19india.org/data.json");
//   const data = await resp.json();
//   console.log(data);
// };
