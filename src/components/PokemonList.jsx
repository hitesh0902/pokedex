import React from "react";
import Container from "@material-ui/core/Container";
import PokemonSummary from "./PokemonSummary";
import Grid from "@material-ui/core/Grid";

function PokemonList({ pokemons, remove }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {pokemons.map((p) => (
          <Grid item xs={3} key={p.id}>
            <PokemonSummary pokemon={p} remove={remove} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PokemonList;
