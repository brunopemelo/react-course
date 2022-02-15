import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/filme/:id" component={Filme}></Route>
                <Route exact path="/favoritos" component={Favoritos}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
