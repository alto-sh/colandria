import React from "react";

import { cx } from "emotion";
import Styles from "./PalaceInitializerStyles";
import Music from "../../../types/Music";
import GlobalStyles from "../../../GlobalStyles";

type Props = {
    dark?: boolean,
    category: Music,
    updateCategory: Function,
    currentMusic: Music
};
type State = {};

export default class MusicCategoryButton extends React.Component<Props, State> {

    render() {
        const theme = (this.props.dark ? Styles.musicCategoryButtonDark : Styles.musicCategoryButtonLight);
        const activeTheme = (this.props.category == this.props.currentMusic ? Styles.activeMusicCategoryButton : null);

        return (
            <div className={cx( Styles.musicCategoryButton, theme, activeTheme )} onClick={() => { this.props.updateCategory(this.props.category) }}>
                {this.props.children}
            </div>
        )
    }

}