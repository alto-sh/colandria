import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./NavPanelStyles";
import Page from "../../../types/Page";

type Props = {
    to: string,
    currentPage: Page,
    page: Page
};
type State = {};

export default class NavBtn extends React.Component<Props, State> {

    render() {
        return (
            <Link to={this.props.to} className={cx( Styles.navBtnStyles, (this.props.page == this.props.currentPage ? Styles.activeNavBtnStyles : null) )}>
                <h4>{this.props.children}</h4>
            </Link>
        )
    }

}