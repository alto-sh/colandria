import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import MindPalace from "./pages/MindPalace/MindPalace";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"             component={ Home }          exact/>
                    <Route path="/journal"      component={ Journal }       exact/>
                    <Route path="/palace"       component={ MindPalace }    exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}