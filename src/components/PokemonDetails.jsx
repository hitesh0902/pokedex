import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
});

function PokemonDetails({ pokemon }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={pokemon.sprites.front_default}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.center}>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Base Experience: {pokemon.base_experience}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Height: {pokemon.height}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Weight: {pokemon.weight}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Ability: {pokemon.abilities[0].ability.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Move: {pokemon.moves[0].move.name}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PokemonDetails;
