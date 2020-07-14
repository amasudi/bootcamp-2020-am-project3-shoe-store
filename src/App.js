import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Men } from "./components/Men";
import { Women } from "./components/Women";
import { Kids } from "./components/Kids";

function App() {
  const styles = {
    toolbar: {
      display: "flex",
      background: "black",
      justifyContent: "space-between",
    },
    nav: { display: "flex", justifyContent: "center" },
    navLink: {
      textDecoration: "none",
      fontWeight: "bold",
      minWidth: "50px",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
      color: "white",
    },
  };
  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={styles.toolbar}>
          <Typography varient="title" color="inherit">
            Bootcamp 2020 - Project3: Shoe Store
          </Typography>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
            <Link to="men.html" style={styles.navLink}>
              Men
            </Link>
            <Link to="women.html" style={styles.navLink}>
              Women
            </Link>
            <Link to="kids.html" style={styles.navLink}>
              Kids
            </Link>
          </nav>
          <IconButton
            href="https://github.com/amasudi/bootcamp-2020-am-project3-shoe-store"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men.html" element={<Men />} />
        <Route path="women.html" element={<Women />} />
        <Route path="kids.html" element={<Kids />} />
      </Routes>
    </Router>
  );
}

export default App;
