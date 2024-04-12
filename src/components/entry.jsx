export default function Entry({ name, timezone, country, icon }) {
  return (
    <div className="flex flex-row hover:border hover:border-slate-500 justify-between">
      <div className="pl-24">
        <div className="text-2xl ">{name}</div>
        <div className="text-1xl text-slate-400">{country}</div>
      </div>
      <div className="text-2xl p-auto pr-24">{timezone}</div>
    </div>
  );
}
