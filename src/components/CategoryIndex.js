import React, { useContext } from "react";
import {
  Card,
  Grid,
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, Link } from "react-router-dom";
import { NotFound } from "./NotFound";

export const CategoryIndex = () => {
  let { data } = useContext(GlobalContext);
  const { catID } = useParams();
  if (data[catID] === null || data[catID] === undefined) {
    return <NotFound />;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{catID.toUpperCase()}</h1>
      <Grid container spacing={2} style={{ padding: 10 }}>
        {Object.entries(data[catID]).map(([proID, { title, rate, imgSrc }]) => {
          return (
            <Grid key={proID} item xs={12} sm={3}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component="img"
                    alt={title}
                    height="250"
                    image={imgSrc}
                    title={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      ${rate}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`${proID}`}>
                    <Button size="small" color="primary">
                      Show Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
