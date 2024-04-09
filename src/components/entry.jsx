export default function Entry({ name, timezone, country }) {
  return (
    <div>
      <div className="flex flex-col p-6 m-4 text-white">
        <div className="text-2xl">{name}</div>
        <div className="text-3xl">{country}</div>
      </div>
    </div>
  );
}
