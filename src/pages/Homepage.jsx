import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import { getNextPokemons, getPreviousPokemons } from "../actions/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50px,-50px)",
  },
}));

function Homepage() {
  const classes = useStyles();

  const pokemons = useSelector((state) => state.pokemons);
  const next = useSelector((state) => state.next);
  const previous = useSelector((state) => state.previous);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      {pokemons.length ? (
        <div>
          <Container maxWidth="sm" style={{ marginBottom: 15 }}>
            <Box display="flex" justifyContent="center">
              {previous && (
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: 20 }}
                  onClick={() => dispatch(getPreviousPokemons(previous))}
                >
                  Previous
                </Button>
              )}
              {next && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(getNextPokemons(next))}
                >
                  Next
                </Button>
              )}
            </Box>
          </Container>
          <PokemonList pokemons={pokemons} />
        </div>
      ) : (
        <CircularProgress color="primary" className={classes.loader} />
      )}
    </div>
  );
}

export default Homepage;
