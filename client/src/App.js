import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Display />
      </Router>
    </div>
  );
}

export default App;
