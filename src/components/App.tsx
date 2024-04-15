import React, { useEffect, useState } from "react";
import Entry from "./entry.tsx";
import Search from "./search.tsx";

interface ReportData {
  timezone: string;
  ascii_name: string;
  cou_name_en: string;
}

export default function App() {
  const [report, setReport] = useState<ReportData[]>([]);
  const [result, setResult] = useState<string>("");
  const [sortNa, setSortNa] = useState<boolean>(false);
  const [sortCn, setSortCn] = useState<boolean>(false);
  const [sortTl, setSortTl] = useState<boolean>(false);
  const [filterReport, setFilterReport] = useState<ReportData[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100&page=${page}`
        );
        const data = await response.json();
        setReport((prevReport) => [...prevReport, ...data.results]); // Append new data to existing report
      } catch (err) {
        console.log("Error fetching data :", err);
      }
    }
    fetchData();
  }, [page]);

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

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-green-200">
      <div className="container mx-auto">
        <div className="flex justify-center text-3xl mb-12">
          <div>WeatherForecast!</div>
        </div>
        <Search result={result.toString()} handleValue={handleValue} />
        <div className="my-2">
          <label htmlFor="Sort" className="ml-2">
            Sort by:
          </label>
          <select
            id="Sort"
            onChange={handleSortChange}
            className="border hover:border-black rounded-lg bg-green-200"
          >
            <option value="sortNa">City</option>
            <option value="sortCn">Country</option>
            <option value="sortTl">TimeZone</option>
          </select>
        </div>
        <hr />
        <div className="mt-2">
          {filterReport.map((data, index) => {
            return (
              <Entry
                key={index}
                timezone={data.timezone}
                name={data.ascii_name}
                country={data.cou_name_en}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
