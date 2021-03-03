import React from "react";

import netlifyIdentity from "netlify-identity-widget";

import Button from "react-bootstrap/esm/Button";

import { cx } from "emotion";
import Styles from "./UserPanelStyles";
import GlobalStyles from "../../../GlobalStyles";

type Props = {
    user: netlifyIdentity.User,
    logout: Function,
    dark?: boolean
};
type State = {};

export default class UserPanel extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.userPanelDark : Styles.userPanelLight);

        return (
            <div className={cx( Styles.userPanel, theme )}>
                <h1>{this.props.user.user_metadata.full_name}</h1>
                <p>{this.props.user.email}</p>
                <br/>
                <Button className={cx( GlobalStyles.negativeButton )} onClick={() => { this.props.logout(); }}>
                    Log Out
                </Button>
            </div>
        )
    }

}