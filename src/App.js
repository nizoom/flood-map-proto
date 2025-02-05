import "./App.css";
import TopSectionParent from "./components/top-section/top-section-parent";
function App() {
  return (
    <div className="App">
      <TopSectionParent />
      <div>{/* MIDDLE SECTION */}</div>
      <div>{/* BOTTOM SECTION */}</div>;
    </div>
  );
}

export default App;
