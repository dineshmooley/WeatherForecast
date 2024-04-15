import React from "react";
import { Link } from "react-router-dom";

interface EntryData {
  name: string;
  timezone: string;
  country: string;
}

const Entry: React.FC<EntryData> = ({ name, timezone, country })  => {
  return (
    <Link to={`/city/${encodeURIComponent(name)}`}>
      <div className="flex flex-row hover:border hover:border-slate-500 justify-between hover:cursor-pointer">
        <div className="pl-24">
          <div className="text-2xl">{name}</div>
          <div className="text-1xl text-slate-600">{country}</div>
        </div>
        <div className="text-2xl p-auto pr-24">{timezone}</div>
      </div>
    </Link>
  );
}

export default Entry;
