import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

// Page Imports
import Home from "./pages/Home/Home";

netlifyIdentity.init({
  locale: 'en' // defaults to 'en'
});

netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));

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
                    <Route path="/"     component={ Home } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}