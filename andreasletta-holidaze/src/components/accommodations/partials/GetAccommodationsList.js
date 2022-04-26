import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import AccommodationItem from "./AccommodationItem";

function GetAccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "accommodations?populate=*";

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();

            setAccommodations(json.data);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <div className="text-info">Loading...</div>;
  }

  if (error) {
    return <div className="text-warning">An error occured: {error}</div>;
  }

  //
  function CheckBox3() {
    const initialList = [accommodations];

    const [list, setList] = useState(initialList);
    console.log(list);
    const clickhandler = ({ target }) => {
      const { checked, id } = target;
      setList(prev => {
        const clickedItem = prev.find(item => item.id.toString() === id);
        clickedItem["checked"] = checked;
        console.log(clickedItem);
        return [...prev];
      });
    };
    //

    /*
    
     <Container id="all-products" className="max-width pb-5">
      <Row xs={2} md={3} lg={4}>
        {products.map(function (product) {
          const { id, title, image } = product;
          return (
            <ProductItem key={id} id={id} title={title} image={image[0].url} />
          );
        })}
      </Row>
    </Container>
    <AccommodationItem  key={id} id={id} title={title} image={image[0].url}   />
   
    const { id, image, name, description, type } = accommodation;
          return (
            <ProductItem id={accommodation.id} name={accommodation.attributes.name} image={ accommodation.attributes.images.data[0].attributes.url} description={accommodation.attributes.description.slice(0, 100)} type={accommodation.attributes.type} />
          );
    */

    return (
      <>
        <ListGroup>
          <Row xs={1} md={2} lg={4}>
            {initialList[0].map(accommodation => {
              return (
                <AccommodationItem
                  key={accommodation.id}
                  id={accommodation.id}
                  name={accommodation.attributes.name}
                  image={accommodation.attributes.images.data[0].attributes.url}
                  description={accommodation.attributes.description.slice(
                    0,
                    100
                  )}
                  type={accommodation.attributes.type}
                />
              );
            })}
          </Row>
        </ListGroup>
      </>
    );
  }
  //
  return <CheckBox3 />;
}

export default GetAccommodationsList;
