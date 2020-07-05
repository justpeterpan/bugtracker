import { useState, useEffect } from "react";

export default function useSpecies(type) {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("FETCHING");

      const data = await fetch(`https://acnhapi.com/v1/${type}/`)
        .then((data) => data.json())
        .then((data) => {
          return (data = Object.values(data));
        });
      setSpecies(data);
    }
    fetchData();
  }, []);

  return species;
}
