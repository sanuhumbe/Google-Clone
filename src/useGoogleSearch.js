import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
const CONTEXT_KEY = "10e54a5432ce10395";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
      //   fetch("https://api.github.com/users/hacktivist123/repos")
      //     .then((response) => response.json())
      //     .then((result) => {
      //       console.log(result);
      //       setData(result);
      //     });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
