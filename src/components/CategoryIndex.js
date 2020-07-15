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
import { useParams } from "react-router-dom";

export const CategoryIndex = () => {
  let { data } = useContext(GlobalContext);
  const { catID } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{catID.toUpperCase()}</h1>
      <Grid container spacing={2} style={{ padding: 10 }}>
        {Object.entries(data[catID]).map(([menID, { title, rate, imgSrc }]) => {
          return (
            <Grid key={menID} item xs={12} sm={3}>
              <Card>
                <CardActionArea>
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
                  <Button size="small" color="primary">
                    Show Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
