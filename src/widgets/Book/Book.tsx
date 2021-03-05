import React from "react";

import { cx } from "emotion";
import Styles from "./BookStyles";

import BookType from "../../types/Book";
import Button from "react-bootstrap/esm/Button";
import GlobalStyles from "../../GlobalStyles";
import { Check } from "react-feather";

import $ from "jquery";
import Config from "../../helpers/httpconfig";

type Props = {
    dark?: boolean,
    book: BookType,
    userIsAuthenticated: boolean,
    inLibrary?: boolean,
    userId: string
};
type State = {
    bookIsInJournal: boolean,
    active: boolean,
    id: string
};

export default class Book extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            bookIsInJournal: false,
            active: false,
            id: this.makeid(20)
        };

        this.checkIfInJournal();
    }
    
    makeid(length: number): string {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async checkIfInJournal() {
        let bookIsInJournal: boolean = false;

        if (this.props.userIsAuthenticated) {
            bookIsInJournal = (await this.checkIfInJournalRequest()).success;
        }

        this.setState({ bookIsInJournal: bookIsInJournal, active: bookIsInJournal });
    }

    async checkIfInJournalRequest(): Promise<{ success: boolean }> {
        return await fetch(`${Config.backend_base_url}/journal/entry/get/val/${this.props.book.ID}/${this.props.userId}`)
                    .then(res => res.json());
    }

    toggleLibraryEntry() {
        if (this.props.inLibrary) $(`#${this.state.id}`).fadeOut();
        this.setState({ active: !this.state.active });
        if (this.props.userIsAuthenticated) {
            console.log("Making Request...");
            fetch(`${Config.backend_base_url}/journal/entry/get/${this.props.book.ID}/${this.props.userId}`)
            .then(res => res.json());
        }
    }

    render() {
        const theme = (this.props.dark ? Styles.bookPanelDark : Styles.bookPanelLight);
        const activeTheme = (this.state.active ? Styles.activeBook : null);

        return (
            <div id={this.state.id}>
                <div className={cx( Styles.bookPanel, theme )}>
                    <h1 className={cx( activeTheme )} onClick={() => { this.toggleLibraryEntry(); }}>📖&nbsp;{this.props.book.NAME}</h1>
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
            </div>
        )
    }

}