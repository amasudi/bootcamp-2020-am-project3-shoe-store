import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { NotFound } from "./NotFound";
import { Grid, Typography } from "@material-ui/core";
export const Product = () => {
  let { data } = useContext(GlobalContext);
  const { catID, productID } = useParams();
  if (
    data[catID] === null ||
    data[catID] === undefined ||
    data[catID][productID] === null ||
    data[catID][productID] === undefined
  ) {
    return <NotFound />;
  }
  const { title, rate, imgSrc, desc } = data[catID][productID];
  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      <Grid item xs={12} sm={6}>
        <img src={imgSrc} alt={title} style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              ${rate}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textPrimary" component="p">
              {desc}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
