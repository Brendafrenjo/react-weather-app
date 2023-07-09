import "./App.css";
import Cities from "./Cities";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Cities />
          <SearchEngine />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
