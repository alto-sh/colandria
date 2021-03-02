import React from "react";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "./Template/Template";

import Page from "../../types/Page";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    render() {
        return (
            <Template currentPage={Page.HOME}>

            </Template>
        )
    }

}