import "./App.css";
import Cities from "./Cities";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import Coder from "./Coder";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Cities />
          <SearchEngine />
          <Forecast />
        </div>
        <Coder />
      </div>
    </div>
  );
}

export default App;
