import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./NavPanelStyles";
import Page from "../../../types/Page";

type Props = {
    to: string,
    currentPage: Page,
    page: Page,
    dark?: boolean
};
type State = {};

export default class NavBtn extends React.Component<Props, State> {

    render() {
        const baseTheme = (this.props.dark ? Styles.darkTheme : Styles.lightTheme);
        const activeTheme = (this.props.dark ? Styles.darkActiveTheme : Styles.lightActiveTheme);
        const isActive: boolean = (this.props.page == this.props.currentPage);
        const theme = (isActive ? activeTheme : baseTheme);

        return (
            <Link to={this.props.to} className={cx( Styles.navBtnStyles, theme)}>
                <h4>{this.props.children}</h4>
            </Link>
        )
    }

}