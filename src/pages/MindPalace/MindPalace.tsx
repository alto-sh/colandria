import React from "react";

import { cx } from "emotion";
import Styles from "./MindPalaceStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";

type Props = {};
type State = {};

export default class MindPalace extends React.Component<Props, State> {

    render() {
        return (
            <Template currentPage={Page.FOCUSED_READING}>

            </Template>
        )
    }

}