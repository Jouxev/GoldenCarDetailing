import { LandingPage, ServicesPage } from "./Pages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import styled from "styled-components";



function App() {
  return (
   
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/services' element={<ServicesPage />} />
        </Routes>
      </Router>
  
  );
}

export default App;
