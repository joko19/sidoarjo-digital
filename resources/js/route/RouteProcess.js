import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Landing from './../components/Landing'
import Example from "./../components/Example";

export default class RouteProcess extends Component {
    render() {
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/example" component={Example} />
        </Switch>;
    }
}
