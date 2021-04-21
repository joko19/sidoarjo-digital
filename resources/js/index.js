import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteProcess from "./route/RouteProcess";
import Landing from "./components/Landing";
import Example from './components/Example'

function Index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/example" component={Example} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.getElementById("index"));
