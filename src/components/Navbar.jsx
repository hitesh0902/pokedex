import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  logo: {
    flexGrow: 1,
  },
  poke: {
    width: 100,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo}>
            <RouterLink to="/home">
              <img
                src="/images/poke.png"
                alt="pokemon"
                className={classes.poke}
              />
            </RouterLink>
          </div>

          <RouterLink to="/home/favorite" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              My Favorites
            </Button>
          </RouterLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
