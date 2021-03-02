import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init({
  container: '#netlify-modal', // defaults to document.body
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
                    <Route path="/"     component={ () => { return <h1>Hello, World!</h1>; } } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}