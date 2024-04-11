import { useEffect, useState } from "react";
import Entry from "./entry";
import Search from "./search";

function App() {
  const [report, setReport] = useState([]);

  useEffect(
    () =>
      async function fetchData() {
        try {
          const response = await fetch(
            "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
          );
          const data = await response.json();
          setReport(data.results);
        } catch (err) {
          console.log("Error fetching data :", err);
        }

        fetchData();
      },
    []
  );
  return (
    <div className="container mx-auto">
      <Search />
      <div className="container mx-auto">
        {report.map((data) => {
          return (
            <Entry
              key={data.geoname_id}
              timezone={data.timezone}
              name={data.ascii_name}
              country={data.cou_name_en}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
