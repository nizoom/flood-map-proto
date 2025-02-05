import "./App.css";
import TopSectionParent from "./components/top-section/top-section-parent";
import BottomSectionParent from "./components/bottom-section/bottom-parent";
import MiddleSectionParent from "./components/middle-section/middle-section-parent";
function App() {
  return (
    <div className="App">
      <div>
        <TopSectionParent />
      </div>
      <div>
        <MiddleSectionParent />
      </div>
      <div>
        <BottomSectionParent />
      </div>
      ;
    </div>
  );
}

export default App;
