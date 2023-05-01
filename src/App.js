import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
