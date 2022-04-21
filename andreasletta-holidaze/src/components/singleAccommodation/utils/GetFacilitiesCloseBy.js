export default function GetFacilitiesCloseBy({ object }) {
  const keys = Object.keys(object);
  console.log(keys);
  keys.forEach(key => {
    // console.log(`${object[key]}`);
    // console.log(`${key}: ${object[key]}`);
    if (`${object[key]}` === "true") {
      console.log(`${key}`);
    }
  });
}
