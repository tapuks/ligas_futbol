import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Error404 from "./components/Error404";
import Menu from "./components/Menu";
import Teams from "./views/Teams"
import Team from "./views/Team/Team";

function App() {

  document.body.style = "background: #4D7EA8"
  return (

    <Router>
      <Menu />

      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/teams/:idCountry/:idTemporada" element={<Teams />} />
        <Route path="/teams/:idCountry/:idTemporada/players/:idTeam/:idTemporada" element={<Team />} />
        <Route path="*" element={<Error404 />} />

      </Routes>

    </Router>










  );
}

export default App;
