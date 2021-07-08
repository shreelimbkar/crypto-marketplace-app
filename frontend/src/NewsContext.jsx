import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apikey = "cbce94fb8af54702ab0a55a412420aa8";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=popularity&apiKey=${apikey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContextProvider props={data}>{props.children}</NewsContextProvider>
  );
};
