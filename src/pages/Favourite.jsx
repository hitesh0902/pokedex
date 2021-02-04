import React from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import { useSelector } from "react-redux";

function Favourite() {
  const pokemons = useSelector((state) => state.favorites);
  return (
    <div>
      <Navbar />
      {pokemons.length ? (
        <PokemonList pokemons={pokemons} remove={true} />
      ) : (
        <Typography variant="h4" align="center">
          No Favourite pokemon {":("}
        </Typography>
      )}
    </div>
  );
}

export default Favourite;
