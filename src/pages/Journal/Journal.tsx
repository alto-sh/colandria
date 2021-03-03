import React from "react";

import { cx } from "emotion";
import Styles from "./JournalStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";

import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";
import $ from "jquery";
import Button from "react-bootstrap/esm/Button";

type Props = {};
type State = {
    dark: boolean
};

export default class Journal extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;

        this.state = {
            dark: dark
        }

        // Method Bindings
        this.toggleDarkMode = this.toggleDarkMode.bind(this);

        this.initializeAuth();
    }

    initializeAuth() {
        netlifyIdentity.init({
            locale: 'en' // defaults to 'en'
        });

        netlifyIdentity.on("close", () => {
            const user = netlifyIdentity.currentUser();
            if (!user) window.location.href = window.location.origin;
        });

        const user = netlifyIdentity.currentUser();
        if (!user) netlifyIdentity.open();
    }

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <Template currentPage={Page.JOURNAL} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>
            </Template>
        )
    }

}