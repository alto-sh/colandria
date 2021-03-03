import React from "react";

import { cx } from "emotion";
import Styles from "./MindPalaceStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";
import PalaceInitializer from "./PalaceInitializer/PalaceInitializer";

import $ from "jquery";

type Props = {};
type State = {
    dark: boolean,
    sessionInProgress: boolean
};

export default class MindPalace extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;
        
        this.state = {
            dark: dark,
            sessionInProgress: false
        }

        // Method Binding
        this.initializeSession = this.initializeSession.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

    componentDidMount() {
        $("#palace").hide();
    }

    initializeSession() {
        this.setState({ dark: true, sessionInProgress: true }, () => {
            $("#init-settings").fadeOut();
            $("#palace").fadeIn();
        });
    }

    /* Implement endSession method */

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <Template currentPage={Page.FOCUSED_READING} dark={this.state.sessionInProgress || this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                <PalaceInitializer dark={this.state.sessionInProgress || this.state.dark} initializeSession={this.initializeSession}/>
            </Template>
        )
    }

}