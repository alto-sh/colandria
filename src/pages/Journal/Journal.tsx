import React from "react";

import { cx } from "emotion";
import Styles from "./JournalStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";

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