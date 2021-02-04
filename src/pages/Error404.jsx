import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

function Error404() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Error 404 page not found</Typography>
      <RouterLink to="/home" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Go To Homepage
        </Button>
      </RouterLink>
    </Container>
  );
}

export default Error404;
