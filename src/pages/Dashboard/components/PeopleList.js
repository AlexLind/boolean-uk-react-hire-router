import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem index={index} person={person} key={index} />
      ))}
    </ul>
  );
}

export default PeopleList;
