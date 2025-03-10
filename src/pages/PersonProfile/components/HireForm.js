import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const { person, hiredPeople, setHiredPeople } = props;
  const navigate = useNavigate();

  const [wage, setWage] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    person.wage = wage;
    setHiredPeople([...hiredPeople, person]);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        placeholder={person.wage ? person.wage : 0}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
