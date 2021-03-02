import React from "react";

import { cx } from "emotion";
import Styles from "./NavPanelStyles";
import NavBtn from "./NavBtn";
import Page from "../../../types/Page";

type Props = {
    currentPage: Page,
    dark?: boolean
};
type State = {};

export default class NavPanel extends React.Component<Props, State> {

    render() {
        return (
            <>
                &nbsp;&nbsp;&nbsp;
                <NavBtn to="/" page={Page.HOME} currentPage={this.props.currentPage} dark={this.props.dark}>Home</NavBtn>
                <NavBtn to="/journal" page={Page.JOURNAL} currentPage={this.props.currentPage} dark={this.props.dark}>Journal</NavBtn>
                <NavBtn to="/palace" page={Page.FOCUSED_READING} currentPage={this.props.currentPage} dark={this.props.dark}>Mind Palace</NavBtn>
            </>
        )
    }

}