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
import { Link } from "react-router-dom";

export const Home = () => {
  let {
    data: { men, women, kids },
  } = useContext(GlobalContext);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Featured Products</h1>
      <Grid container spacing={2} style={{ padding: 10 }}>
        {Object.entries(men)
          .filter(([menObj, { showOnHome }]) => showOnHome)
          .map(([proID, { title, rate, imgSrc }]) => {
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
                    <Link to={`men/${proID}`}>
                      <Button size="small" color="primary">
                        Show Details
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        {Object.entries(women)
          .filter(([womenObj, { showOnHome }]) => showOnHome)
          .map(([proID, { title, rate, imgSrc }]) => {
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
                    <Link to={`women/${proID}`}>
                      <Button size="small" color="primary">
                        Show Details
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        {Object.entries(kids)
          .filter(([kidObj, { showOnHome }]) => showOnHome)
          .map(([proID, { title, rate, imgSrc }]) => {
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
                    <Link to={`kids/${proID}`}>
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
