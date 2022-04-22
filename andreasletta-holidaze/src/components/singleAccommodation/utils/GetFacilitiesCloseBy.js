import { ListGroup } from "react-bootstrap";

export default function GetFacilitiesCloseBy({ object }) {
  const keys = Object.keys(object);

  return (
    <>
      {keys.map(key => {
        // console.log(`${object[key]}`);
        // console.log(`${key}: ${object[key]}`);

        if (`${object[key]}` === "true") {
          const newKey = `${key.replaceAll("_", " ")}`;
          return <ListGroup.Item key={newKey}>{newKey}</ListGroup.Item>;
        }
      })}
    </>
  );
}
