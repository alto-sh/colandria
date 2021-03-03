import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import GlobalStyles from "../../GlobalStyles";
import NavPanel from "./NavPanel/NavPanel";
import Page from "../../types/Page";

type Props = {
    currentPage: Page,
    dark?: boolean,
    toggleDarkMode?: Function
};
type State = {};

export default class Template extends React.Component<Props, State> {

    static defaultProps = {
        dark: false
    }

    render() {
        return (
            <div className={cx( GlobalStyles.FLAT_LINK, Styles.pageStyles, (this.props.dark ? Styles.darkTheme : Styles.lightTheme) )}>
                <div className={cx( Styles.innerFrame )}>
                    <br/><br/>
                    <span className={cx( Styles.headerStyles )} onClick={(this.props.toggleDarkMode ? () => { this.props.toggleDarkMode() }: null)}>
                        <h1 className=".josefin">Colandria</h1>
                    </span>
                    <br/>
                    <NavPanel currentPage={this.props.currentPage} dark={this.props.dark}/>
                    <br/><br/>
                    <div className={cx( Styles.bodyStyles )}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}