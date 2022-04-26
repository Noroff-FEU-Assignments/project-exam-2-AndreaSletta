import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/api";
import AccommodationItem from "../../accommodations/partials/AccommodationItem";
import { ListGroup, Row } from "react-bootstrap";

export default function SearchInput() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let initialList = [];

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

  function RenderContent() {
    initialList = [accommodations];
    console.log(initialList);

    if (initialList !== accommodations) {
      console.log("unique");
    }
    return (
      <>
        <ListGroup>
          <Row xs={1}>
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

  function search() {
    const searchInput = document.querySelector("#search-input");
    const searchInputValue = searchInput.value.trim().toLowerCase();
    console.log(searchInputValue);
    const filteredAccommodations = accommodations.filter(function (
      accommodation
    ) {
      if (
        accommodation.attributes.name
          .toLowerCase()
          .includes(searchInputValue) ||
        accommodation.attributes.description
          .toLowerCase()
          .includes(searchInputValue)
      ) {
        console.log(accommodation.attributes.name);

        return true;
      } else {
        return false;
      }
    });
    if (filteredAccommodations.length < 1) {
      console.log("no item to match search");
    } else {
      console.log("item match search");
    }

    setAccommodations(filteredAccommodations);
    RenderContent();
    console.log(filteredAccommodations.length);
  }

  return (
    <>
      <Row xs={1}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Søk..."
          aria-label="Search"
          id="search-input"
          onKeyUp={search}
        />
        <RenderContent id="searchResult" />
      </Row>
    </>
  );
}
