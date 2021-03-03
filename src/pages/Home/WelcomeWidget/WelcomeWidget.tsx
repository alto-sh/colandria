import React from "react";

import Button from "react-bootstrap/esm/Button";

import { cx } from "emotion";
import Styles from "./WelcomeWidgetStyles";
import GlobalStyles from "../../../GlobalStyles";

type Props = {
    openNetlifyIdentity: Function,
    dark?: boolean
};
type State = {};

export default class WelcomeWidget extends React.Component<Props, State> {

    render() {
        return (
            <div className={cx( Styles.welcomeWidget, (this.props.dark ? Styles.welcomeWidgetDark : Styles.welcomeWidgetLight), "text-center" )}>
                <div style={{ margin: 50 }}>
                    <h1><span className={cx( Styles.handWave )}>👋</span> Hi! Welcome to Colandria...</h1>
                    <p>A reading directory for bookworms.</p>
                </div>
                <Button className={cx( GlobalStyles.coloredButton )} style={{ marginBottom: 10 }} onClick={() => { this.props.openNetlifyIdentity('signup') }}>
                    Create an Account
                </Button>
                <Button className={cx( GlobalStyles.lightButton )} onClick={() => { this.props.openNetlifyIdentity('login') }}>
                    I have an Account
                </Button>
            </div>
        )
    }

}