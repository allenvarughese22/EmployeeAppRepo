
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListEmployeeComponent } from './components/ListEmployee';
import HeadComponent from './components/HeadComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddEmployee from './components/AddEmployee';


function App() {
  return (
    <>
      <Router>
        <HeadComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<AddEmployee />} />

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
