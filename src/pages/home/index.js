import React, { useState, useEffect } from "react";
import { getCollections } from "../../utils";
import get from "lodash/get";
import CollectionBox from "../../components/collection-box";
import { Container } from "@material-ui/core";

const Home = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await getCollections("home");
      const items = get(result, ["items"], []);
      setCollections(items);
    })();
  }, []);
  if (!collections.length) return null;
  return (
    <Container maxWidth="xl">
      <CollectionBox slug="top-news" />
    </Container>
  );
};

export default Home;
