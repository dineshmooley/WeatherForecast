import { useEffect, useState } from "react";
import Entry from "./entry";
import Search from "./search";

export default function App() {
  const [report, setReport] = useState([]);
  const [result, setResult] = useState("");
  const [sortNa, setSortNa] = useState(false);
  const [sortCn, setSortCn] = useState(false);
  const [sortTl, setSortTl] = useState(false);
  const [filterReport, setFilterReport] = useState([]);

  useEffect(() => {
    const filtered = report.filter((data) => {
      return (
        data.ascii_name.toLowerCase().includes(result.toLowerCase()) ||
        data.cou_name_en.toLowerCase().includes(result.toLowerCase())
      );
    });

    let sorted = [...filtered];
    if (sortNa) {
      sorted = sorted.sort((a, b) => a.ascii_name.localeCompare(b.ascii_name));
    } else if (sortCn) {
      sorted = sorted.sort((a, b) =>
        a.cou_name_en.localeCompare(b.cou_name_en)
      );
    } else if (sortTl) {
      sorted = sorted.sort((a, b) => a.timezone.localeCompare(b.timezone));
    }

    setFilterReport(sorted);
  }, [result, report, sortNa, sortCn, sortTl]);

  const handleValue = (e) => {
    setResult(e.target.value);
  };
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

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "sortNa") {
      setSortNa(true);
      setSortCn(false);
      setSortTl(false);
    } else if (value === "sortCn") {
      setSortNa(false);
      setSortCn(true);
      setSortTl(false);
    } else if (value === "sortTl") {
      setSortNa(false);
      setSortCn(false);
      setSortTl(true);
    }
  };

  return (
    <div className="container mx-auto">
      <Search result={result} handleValue={handleValue} />
      <div className="mb-2">
        <label htmlFor="Sort" className="mr-2">
          Sort by:
        </label>
        <select id="Sort" onChange={handleSortChange} className="border border-black rounded-lg">
          <option value="sortNa">City</option>
          <option value="sortCn">Country</option>
          <option value="sortTl">TimeZone</option>
        </select>
      </div>
      <hr />
      <div className="mt-2">
        {filterReport.map((data) => {
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
