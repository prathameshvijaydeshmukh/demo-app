import "./App.css";
import ButtonCompo from "./component/ButtonCompo/ButtonCompo";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <div className="conatiner">
      <Sidebar />
      <ButtonCompo />
    </div>
  );
}

export default App;
