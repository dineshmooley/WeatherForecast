import React from "react";

interface SearchData {
  result: String;
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchData> = ({ result, handleValue }) => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="flex flex-row border hover:border-black rounded-full w-3/5 h-12 overflow-hidden">
          <input
            type="text"
            className="basis-10/12 outline-none p-2 flex justify-center "
            placeholder="Search for the city...."
            value={result as string}
            onChange={(e) => handleValue(e)}
          />
          <button className="text-2xl basis-2/12 pb-2 bg-red-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
