import Slider from "./Components/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Main from "./Components/Main/Main";
import Loader from "./Components/Loader/Loader";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Slider />
        <Main />
      </div>
      <Routes>
        <Route path="/loader" element={<Loader />}/>
      </Routes>
    </Router>
  );
};

export default App;
