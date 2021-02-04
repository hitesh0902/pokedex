import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import Error404 from "./pages/Error404";
import Favourite from "./pages/Favourite";
import { useDispatch } from "react-redux";
import { getPokemons } from "./actions/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home/favorite" component={Favourite} />
          <Route exact path="/home/:pokemon/detail" component={Details} />
          <Route exact path="/home" component={Homepage} />
          <Route path="/" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
