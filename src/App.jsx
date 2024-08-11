import "./App.css";
import Profilecard from "./components/Profilecard";
import topCircle from "./assets/images/bg-pattern-top.svg";
import bottomCircle from "./assets/images/bg-pattern-bottom.svg";

function App() {
  return (
    <main>
      <div className="background">
        <img class='top' src={topCircle} />
        <img class='bottom' src={bottomCircle} />
      </div>
      <Profilecard />
    </main>
  );
}

export default App;
