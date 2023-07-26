import "./App.css";
import SearchEngine from "./SearchEngine";
import Coder from "./Coder";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <SearchEngine defaultCity="Nairobi" />
        </div>
        <Coder />
      </div>
    </div>
  );
}

export default App;
