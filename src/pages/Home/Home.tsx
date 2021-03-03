import React from "react";

import { cx } from "emotion";
import GlobalStyles from "../../GlobalStyles";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import netlifyIdentity from "netlify-identity-widget";

import Page from "../../types/Page";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import WelcomeWidget from "./WelcomeWidget/WelcomeWidget";
import UserPanel from "./UserPanel/UserPanel";

type Props = {};
type State = {
    dark: boolean,
    userIsAuthenticated: boolean,
    user: netlifyIdentity.User | null
};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const { userIsAuthenticated, user } = this.initializeAuth();

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;

        this.state = {
            dark: dark,
            userIsAuthenticated: userIsAuthenticated,
            user: user
        }

        // Method Bindings
        this.setUserIsAuthenticated = this.setUserIsAuthenticated.bind(this);
        this.setUserIsNotAuthenticated = this.setUserIsNotAuthenticated.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

    initializeAuth(): { userIsAuthenticated: boolean, user: netlifyIdentity.User } {
        netlifyIdentity.init({
            locale: 'en' // defaults to 'en'
        });

        // Bindings
        const outerThis = this;
        netlifyIdentity.on("login", () => { outerThis.setUserIsAuthenticated(outerThis); });
        netlifyIdentity.on("logout", () => { outerThis.setUserIsNotAuthenticated(outerThis); });

        const user = netlifyIdentity.currentUser();
        return {
            userIsAuthenticated: !!user,
            user: user
        };
    }

    setUserIsAuthenticated(outerThis: React.Component) {
        outerThis.setState({ userIsAuthenticated: true });
    }
    
    setUserIsNotAuthenticated(outerThis: React.Component) {
        outerThis.setState({ userIsAuthenticated: false });
    }

    openNetlifyIdentity() {
        netlifyIdentity.open();
    }

    logout() {
        netlifyIdentity.logout();
    }

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <Template currentPage={Page.HOME} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                {
                    !this.state.userIsAuthenticated ? (
                        /* If the user is not authenticated */
                        <WelcomeWidget dark={this.state.dark} openNetlifyIdentity={this.openNetlifyIdentity}/>
                    ) : (
                        /* If the user is authenticated */
                        <UserPanel dark={this.state.dark} user={this.state.user} logout={this.logout}/>
                    )
                }
            </Template>
        )
    }

}