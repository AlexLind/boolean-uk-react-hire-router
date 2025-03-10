import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);



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
          element={<Dashboard hiredPeople={hiredPeople} />}
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
