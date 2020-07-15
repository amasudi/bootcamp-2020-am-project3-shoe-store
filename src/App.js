import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Category } from "./components/Category";
import { CategoryIndex } from "./components/CategoryIndex";
import { Product } from "./components/Product";

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
    <GlobalProvider>
      <Router>
        <div style={{ width: "100%" }}>
          <AppBar position="static">
            <Toolbar style={styles.toolbar}>
              <Typography varient="title" color="inherit">
                Bootcamp 2020 - Project3: Shoe Store
              </Typography>
              <nav style={styles.nav}>
                <Link to="/" style={styles.navLink}>
                  Home
                </Link>
                <Link to="men" style={styles.navLink}>
                  Men
                </Link>
                <Link to="women" style={styles.navLink}>
                  Women
                </Link>
                <Link to="kids" style={styles.navLink}>
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
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":catID" element={<Category />}>
            <Route path="/" element={<CategoryIndex />} />
            <Route path=":catID/:productID" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
