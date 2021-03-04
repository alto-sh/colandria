import React from "react";

import { cx } from "emotion";
import Styles from "./MindPalaceStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";
import PalaceInitializer from "./PalaceInitializer/PalaceInitializer";

import $ from "jquery";
import Music from "../../types/Music";

type Props = {};
type State = {
    dark: boolean,
    sessionInProgress: boolean,
    music: Music
};

export default class MindPalace extends React.Component<Props, State> {

    lofiMusicEndpoint: string = "../../../public/assets/audio/mp3/lofi.mp3";
    atmosphericMusicEndpoint: string = "../../../public/assets/audio/mp3/atmos.mp3";
    audio: HTMLAudioElement = new Audio();

    constructor(props: Props) {
        super(props);

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;
        
        this.audio.setAttribute("loop", "true");

        this.state = {
            dark: dark,
            sessionInProgress: false,
            music: Music.NONE
        }

        // Method Binding
        this.initializeSession = this.initializeSession.bind(this);
        this.endSession = this.endSession.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    componentDidMount() {
        $("#palace").hide();
    }

    updateCategory(music: Music) {
        this.setState({ music: music }, () => {
            let src: string = "";
            if (this.state.music === Music.LOFI) src = this.lofiMusicEndpoint;
            else if (this.state.music === Music.ATMOSPHERIC) src = this.atmosphericMusicEndpoint;
            this.audio.setAttribute("src", src);
        });
    }

    initializeSession() {
        this.setState({ dark: true, sessionInProgress: true }, () => {
            $("#init-settings").fadeOut();
            $("#palace").fadeIn();
            this.audio.play();
        });
    }

    /* Implement endSession method */
    endSession() {
        this.setState({ dark: false, sessionInProgress: false }, () => {
            $("#palace").fadeOut();
            $("#init-settings").fadeIn();
            this.audio.pause();
        });
    }

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <Template currentPage={Page.FOCUSED_READING} dark={this.state.sessionInProgress || this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                <PalaceInitializer 
                    dark={this.state.sessionInProgress || this.state.dark} 
                    initializeSession={this.initializeSession} 
                    endSession={this.endSession} 
                    updateCategory={this.updateCategory} 
                    music={this.state.music}
                />
            </Template>
        )
    }

}