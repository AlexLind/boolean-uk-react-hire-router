import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const { hiredPeople, setHiredPeople } = props;

  const location = useLocation();

  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (location.state) {
      const currentPerson = location.state;
      setPerson(currentPerson);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
