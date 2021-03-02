import React from "react";

import { cx } from "emotion";
import Styles from "./MindPalaceStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";
import PalaceInitializer from "./PalaceInitializer/PalaceInitializer";

import $ from "jquery";

type Props = {};
type State = {
    dark: boolean
};

export default class MindPalace extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            dark: false
        }

        // Method Binding
        this.initializeSession = this.initializeSession.bind(this);
    }

    componentDidMount() {
        $("#palace").hide();
    }

    initializeSession() {
        this.setState({ dark: true }, () => {
            $("#init-settings").fadeOut();
            $("#palace").fadeIn();
        });
    }

    /* Implement endSession method */

    render() {
        return (
            <Template currentPage={Page.FOCUSED_READING} dark={this.state.dark}>
                <PalaceInitializer dark={this.state.dark} initializeSession={this.initializeSession}/>
            </Template>
        )
    }

}