import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        {/* <Route path="/view/:id/edit" element={<PersonProfile people={people}/>}/> */}
      </Routes>
    </>
  );
}
