import "./App.css";
import AddUnitForm from "./components/AddUnitForm";
import UnitList from "./components/UnitList";

function App() {
  return (
    <>
      <UnitList />

      <div className="inputs">
        <AddUnitForm />
      </div>
    </>
  );
}

export default App;
