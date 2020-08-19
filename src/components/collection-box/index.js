import React, { useState, useEffect } from "react";
import { getCollections, assetHost } from "../../utils";
import get from "lodash/get";
import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 345,
  },
  media: {
    height: 140,
    backgroundColor: theme.palette.primary.light,
  },
}));

const CollectionBox = (props) => {
  const classes = useStyles();

  const [stories, setStories] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await getCollections(props.slug);
      const items = get(result, ["items"], []);
      setStories(items);
    })();
  }, []);
  if (!stories.length) return null;
  return (
    <Grid container spacing={3} alignItems="stretch">
      {stories.slice(0, 10).map((item) => {
        if (item.type !== "story") return null;
        const { story } = item;
        return (
          <Grid key={item.id} item xs={12} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea component={Link} to={story.slug}>
                <CardMedia
                  className={classes.media}
                  image={`${assetHost}/${story["hero-image-s3-key"]}?rect=658%2C0%2C5249%2C3937&auto=format%2Ccompress&fm=webp&format=webp&q=70&w=400`}
                  title={story.headline}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {story.headline}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
        // return <div key={item.id}>{item.story.headline}</div>;
      })}
    </Grid>
  );
};

export default CollectionBox;
