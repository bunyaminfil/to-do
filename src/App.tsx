import AddJob from "./Components/AddJob/addjob.component";
import ListJob from "./Components/ListJob/listjob.component";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <AddJob />
      <ListJob />
    </div>
  );
}

export default App;
