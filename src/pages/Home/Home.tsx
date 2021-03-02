import React from "react";

import { cx } from "emotion";
import GlobalStyles from "../../GlobalStyles";
import Styles from "./HomeStyles";
import Template from "../Template/Template";

import Page from "../../types/Page";
import Button from "react-bootstrap/Button";
import $ from "jquery";

type Props = {};
type State = {
    dark: boolean
};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            dark: false
        };
    }

    render() {
        return (
            <Template currentPage={Page.HOME} dark={this.state.dark}>
                <div className={cx( Styles.welcomeWidget, (this.state.dark ? Styles.welcomeWidgetDark : Styles.welcomeWidgetLight), "text-center" )}>
                    <div style={{ margin: 50 }}>
                        <h1><span className={cx( Styles.handWave )}>👋</span> Hi! Welcome to Colandria...</h1>
                        <p>A reading directory for bookworms.</p>
                    </div>
                    <Button className={cx( GlobalStyles.coloredButton )} style={{ marginBottom: 10 }}>
                        Create an Account
                    </Button>
                    <Button className={cx( GlobalStyles.lightButton )}>
                        I have an Account
                    </Button>
                </div>
            </Template>
        )
    }

}