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

export const Home = () => {
  let {
    data: { men, women, kids },
  } = useContext(GlobalContext);
  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {Object.entries(men).map(
        ([menID, { title, rate, imgSrc, showOnHome }]) => {
          if (showOnHome) {
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
          }
        }
      )}
      {Object.entries(women).map(
        ([womenID, { title, rate, imgSrc, showOnHome }]) => {
          if (showOnHome) {
            return (
              <Grid key={womenID} item xs={12} sm={3}>
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
          }
        }
      )}
      {Object.entries(kids).map(
        ([kidID, { title, rate, imgSrc, showOnHome }]) => {
          if (showOnHome) {
            return (
              <Grid key={kidID} item xs={12} sm={3}>
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
          }
        }
      )}
    </Grid>
  );
};
