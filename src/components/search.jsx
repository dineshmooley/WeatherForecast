export default function Search({ result, handleValue }) {
  return (
    <div className="container my-24">
      <div className="flex justify-center">
        <div className="flex flex-row border hover:border-black rounded-full w-3/5 h-12 overflow-hidden">
          <input
            type="text"
            className="basis-10/12 outline-none ml-2 flex justify-center"
            placeholder="Search for the city...."
            value={result}
            onChange={(e) => handleValue(e)}
          />
          <button className="text-2xl basis-2/12 pb-2 bg-red-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
