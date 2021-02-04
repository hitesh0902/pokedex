import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import PokemonDetails from "../components/PokemonDetails";
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

function Details({ match }) {
  const classes = useStyles();
  const pokemon = useSelector((state) =>
    state.pokemons.find((p) => p.name === match.params.pokemon)
  );

  return (
    <div>
      <Navbar />
      {pokemon && <PokemonDetails pokemon={pokemon} />}
      {!pokemon && (
        <CircularProgress color="primary" className={classes.loader} />
      )}
    </div>
  );
}

export default Details;
