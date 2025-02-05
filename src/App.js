import "./App.css";
import TopSectionParent from "./components/top-section/top-section-parent";
import BottomSectionParent from "./components/bottom-section/bottom-parent";
function App() {
  return (
    <div className="App">
      <TopSectionParent />
      <div>{/* MIDDLE SECTION */}</div>
      <div>
        <BottomSectionParent />
      </div>
      ;
    </div>
  );
}

export default App;
