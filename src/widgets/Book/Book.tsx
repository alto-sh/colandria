import React from "react";

import { cx } from "emotion";
import Styles from "./BookStyles";

import BookType from "../../types/Book";
import Button from "react-bootstrap/esm/Button";
import GlobalStyles from "../../GlobalStyles";
import { Check } from "react-feather";

type Props = {
    dark?: boolean,
    book: BookType,
    userIsAuthenticated: boolean
};
type State = {
    bookIsInJournal: boolean
};

export default class Book extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            bookIsInJournal: false
        };

        this.checkIfInJournal();
    }

    checkIfInJournal() {
        // Set this to the result of a request
        const bookIsInJournal: boolean = true;

        this.setState({ bookIsInJournal: bookIsInJournal });
    }

    render() {
        const theme = (this.props.dark ? Styles.bookPanelDark : Styles.bookPanelLight);
        return (
            <>
                <div className={cx( Styles.bookPanel, theme )}>
                    <h1 className={cx( Styles.activeBook )}>📖&nbsp;{this.props.book.NAME}</h1>
                    <p>{this.props.book.AUTHOR}</p>
                    <br/>
                    <a href={this.props.book.AMAZON_LINK} className={cx( GlobalStyles.FLAT_LINK )} target="_blank">
                        <Button className={cx( GlobalStyles.amazonButton )} style={{ marginBottom: 10 }}>
                            See on Amazon
                        </Button>
                    </a>
                    <a href={this.props.book.GOODREADS_LINK} className={cx( GlobalStyles.FLAT_LINK )} target="_blank">
                        <Button className={cx( GlobalStyles.goodreadsButton )}>
                            See on Goodreads
                        </Button>
                    </a>
                </div>
                <br/>
            </>
        )
    }

}