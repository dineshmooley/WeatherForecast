export default function Entry({ name, timezone, country, icon }) {
  return (
    <div className="flex flex-row border hover:border-slate-500">
      <div className="basis-1/2 flex flex-col">
        <div className="text-2xl pl-24">{name}</div>
        <div className="text-1xl text-slate-400 pl-28">{country}</div>
      </div>
      <div className="basis-1/4 text-2xl p-auto pl-6">{timezone}</div>
      <div className="basis-1/4 px-auto">{icon}</div>
    </div>
  );
}
