import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Template } from "../pages/Template";

export const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Template />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
        </Switch>
    )
}