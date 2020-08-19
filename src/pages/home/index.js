import React, { useState, useEffect } from "react";
import { getCollections } from "../../utils";
import get from "lodash/get";
import CollectionBox from "../../components/collection-box";
import { Container, Box, Typography, Divider } from "@material-ui/core";

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
    <Container maxWidth="lg" mt={2}>
      <Box mt={3} mb={3}>
        {collections.map((item) => {
          return (
            <>
              <Box mb={2}>
                <Typography variant="h5" color="primary" component="h2">
                  {item.name}
                </Typography>
              </Box>
              <CollectionBox key={item.id} slug={item.slug} />
              <Box mt={4} mb={4}>
                <Divider variant="fullWidth" />
              </Box>
            </>
          );
        })}

        {/* <CollectionBox slug="top-news" /> */}
      </Box>
    </Container>
  );
};

export default Home;
