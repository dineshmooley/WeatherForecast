import Entry from "./entry";
import Search from "./search";

function App() {
  return (
    <div className="container mx-auto">
      <Search />
      <div className="container mx-auto">
        <Entry
          name="Chennai"
          timezone="GMT+5:30"
          country="India"
          //icon = {icon}
        />
      </div>
    </div>
  );
}

export default App;
