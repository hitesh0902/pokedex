import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemonFavorite, removePokemonFavorite } from "../actions/action";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
  name: {
    textTransform: "capitalize",
  },
  route: {
    textDecoration: "none",
    color: "inherit",
  },
});

function PokemonSummary({ pokemon, remove }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <RouterLink
          to={`/home/${pokemon.name}/detail`}
          className={classes.route}
        >
          <CardMedia
            className={classes.media}
            image={pokemon.sprites.front_default}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.name}
            >
              {pokemon.name}
            </Typography>
          </CardContent>
        </RouterLink>
      </CardActionArea>
      <CardActions className={classes.center}>
        {remove ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(removePokemonFavorite(pokemon))}
          >
            Remove From Favorites
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(addPokemonFavorite(pokemon))}
          >
            Add to Favorites
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default PokemonSummary;
