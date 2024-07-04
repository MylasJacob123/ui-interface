import './App.css';
import Navigation from './component/navigation';
import SectionA from './component/section-A';
import SectionB from './component/section-B';

function App() {
  return (
    <div >
      <div className="App">
        <Navigation />
        <SectionA />
        <SectionB />
      </div>
    </div>
  );
}

export default App;
