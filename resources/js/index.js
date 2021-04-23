import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteProcess from "./route/RouteProcess";
import Home from "./components/Home/Home";
import Landing from "./components/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Example from "./components/Example";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";

function Index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/account/login" component={Login} />
                <Route exact path="/account/register" component={Register} />
                <Route exact path="/example" component={Example} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.getElementById("index"));
