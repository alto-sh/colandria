import React from "react";

import Button from "react-bootstrap/esm/Button";

import { cx } from "emotion";
import Styles from "./PalaceInitializerStyles";
import GlobalStyles from "../../../GlobalStyles";
import MusicCategoryButton from "./MusicCategoryButton";

import Music from "../../../types/Music";

type Props = {
    dark?: boolean,
    initializeSession: Function
};
type State = {
    time: number,
    music: Music
};

export default class PalaceInitializer extends React.Component<Props, State> {

    timerTask: NodeJS.Timeout = null;

    constructor(props: Props) {
        super(props);

        this.state = {
            time: 1500,
            music: Music.NONE
        }

        // Method Binding
        this.updateCategory = this.updateCategory.bind(this);
        this.decrementTimer = this.decrementTimer.bind(this);
    }

    formatTime(time: number) {
        var hours: number = Math.floor(time / 3600);
        var minutes: number = Math.floor((time - (hours * 3600)) / 60);
        var seconds: number = time - (hours * 3600) - (minutes * 60);

        if (hours === 0) return `${this.zeroPad(minutes)}:${this.zeroPad(seconds)}`;
        return `${this.zeroPad(hours)}:${this.zeroPad(minutes)}:${this.zeroPad(seconds)}`;
    }

    zeroPad(num: number): string {
        return (num < 10 ? `0${num}` : `${num}`);
    }

    updateCategory(music: Music) {
        this.setState({ music: music });
    }

    getMusicDesc(): string {
        if ( this.state.music == Music.NONE ) return "";
        return `Playing ${this.state.music === Music.LOFI ? "Lofi" : "Atmospheric" } Music...`;
    }

    startTimer() {
        this.timerTask = setInterval(this.decrementTimer, 1000);
    }

    decrementTimer() {
        let time: number = this.state.time;
        
        if (time === 0) {
            clearInterval(this.timerTask);
            // Call this.props.endSession
            return;
        }

        this.setState({ time: time - 1 });
    }

    render() {
        const theme = (this.props.dark ? Styles.darkTheme : Styles.lightTheme);
        return (
            <>
                <div id="init-settings">
                    <div className={cx( Styles.panelStyles, theme)} hidden={this.props.dark && false}>
                        <br/>
                        <h1>Free from Distraction</h1>
                        <p>Some stuff about cutting away distractions...</p>
                        <div className={cx( Styles.timer )}>
                            { this.formatTime(this.state.time) }
                        </div>
                    </div>
                    <br/>
                    <div className={cx( Styles.panelStyles, theme)} hidden={this.props.dark && false}>
                        <br/>
                        <h1>Music?</h1>
                        <p>Some stuff about music...</p>
                        <MusicCategoryButton category={Music.LOFI} dark={this.props.dark} updateCategory={this.updateCategory} currentMusic={this.state.music}>
                            Lofi
                        </MusicCategoryButton>
                        <MusicCategoryButton category={Music.ATMOSPHERIC} dark={this.props.dark} updateCategory={this.updateCategory} currentMusic={this.state.music}>
                            Atmospheric
                        </MusicCategoryButton>
                        <MusicCategoryButton category={Music.NONE} dark={this.props.dark} updateCategory={this.updateCategory} currentMusic={this.state.music}>
                            No Music
                        </MusicCategoryButton>
                    </div>
                    <br/>
                    <div className={cx( Styles.panelStyles, theme)} hidden={this.props.dark && false}>
                        <Button className={cx( GlobalStyles.coloredButton )} onClick={() => { this.startTimer(); this.props.initializeSession() }}>Start Reading</Button>
                    </div>
                </div>
                <div id="palace">
                    <div className={cx( Styles.panelStyles, theme)} hidden={this.props.dark && false}>
                        <div className={cx( Styles.timer )}>
                            { this.formatTime(this.state.time) }
                        </div>
                        <h4 style={{ color: "#666" }}>{this.getMusicDesc()}</h4>
                    </div>
                </div>
            </>
        )
    }

}