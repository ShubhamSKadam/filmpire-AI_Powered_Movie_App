import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Actors from "./Actors/Actors";
import NavBar from "./NavBar/NavBar";
import Movies from "./Movies/Movies";
import MovieInformation from "./MovieInformation/MovieInformation";
import Profile from "./Profile/Profile";

const App = () => {
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/movie/:id">
                        <MovieInformation />
                    </Route>
                    <Route exact path="/actors/:id">
                        <Actors />
                    </Route>
                    <Route exact path="/">
                        <Movies />
                    </Route>
                    <Route exact path="/profile/:id">
                        <Profile />
                    </Route>
                </Switch>
            </main>
        </div>
    );
};

export default App;
