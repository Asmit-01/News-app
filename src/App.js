// import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body key="general" category='general' />} />
          <Route path="/business" element={<Body key="business" category='business' />} />
          <Route path="/entertainment" element={<Body key="entertainment" category='entertainment' />} />
          <Route path="/general" element={<Body key="general" category='general' />} />
          <Route path="/health" element={<Body key="health" category='health' />} />
          <Route path="/science" element={<Body key="science" category='science' />} />
          <Route path="/sports" element={<Body key="sports" category='sports' />} />
          <Route path="/technology" element={<Body key="technology" category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
