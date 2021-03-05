import React from "react";

import { cx } from "emotion";
import Styles from "./LibraryStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";

import netlifyIdentity from "netlify-identity-widget";
import Button from "react-bootstrap/esm/Button";
import GlobalStyles from "../../GlobalStyles";

import BookType from "../../types/Book";
import Config from "../../helpers/httpconfig";
import Book from "../../widgets/Book/Book";
import NewBookModal from "./NewBookModal/NewBookModal";

type Props = {};
type State = {
    dark: boolean,
    books: BookType[],
    showNewBookModal: boolean
};

export default class Library extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;

        this.state = {
            dark: dark,
            books: [],
            showNewBookModal: false
        }

        // Method Bindings
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.openNewBookModal = this.openNewBookModal.bind(this);
        this.hideNewBookModal = this.hideNewBookModal.bind(this);
        this.submitBook = this.submitBook.bind(this);

        this.initializeAuth();
    }

    initializeAuth() {
        netlifyIdentity.init({
            locale: 'en' // defaults to 'en'
        });

        netlifyIdentity.on("close", () => {
            const user = netlifyIdentity.currentUser();
            if (!user) window.location.href = window.location.origin;
            else this.loadData();
        });

        const user = netlifyIdentity.currentUser();
        if (!user) netlifyIdentity.open()
        else this.loadData();
    }

    async loadData() {
        const books = (await this.getBooks()).results;
        this.setState({ books: this.state.books.concat(books) });
    }

    async getBooks(): Promise<{ success: boolean, results: BookType[] }> {
        return await fetch(`${Config.backend_base_url}/journal/entry/get/${netlifyIdentity.currentUser().id}`)
                    .then(res => res.json());
    }

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    openNewBookModal() {
        this.setState({ showNewBookModal: true });
    }

    hideNewBookModal() {
        this.setState({ showNewBookModal: false });
    }

    async submitBook(book: any) {
        this.setState({ showNewBookModal: false });
        await fetch(`${Config.backend_base_url}/book/create/${netlifyIdentity.currentUser().id}`, {
            headers: {
                "Content-Type": "application/json",
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
            },
            "mode": "cors",
            "method": "POST",
            body: JSON.stringify(book)
        });
        const books = (await this.getBooks()).results;
        this.setState({ books: books });
    }

    render() {
        const theme = (this.state.dark ? GlobalStyles.genericPanelDark : GlobalStyles.genericPanelLight);
        return (
            <>
                <Template currentPage={Page.LIBRARY} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                    <div className={cx( GlobalStyles.genericPanel, theme )}>
                        <h1>Can't find a book?</h1>
                        <p>Help grow Colandria's catalogue!</p>
                        <br/>
                        <Button className={cx( GlobalStyles.coloredButton )} onClick={this.openNewBookModal}>
                            New Book
                        </Button>
                    </div>
                    <br/>
                    {
                        this.state.books.map(book => (
                            <Book 
                                book={book} 
                                dark={this.state.dark}
                                userIsAuthenticated={!!netlifyIdentity.currentUser()}
                                userId={netlifyIdentity.currentUser() ? netlifyIdentity.currentUser().id : ""}
                                inLibrary
                            />
                        ))
                    }
                </Template>
                <NewBookModal 
                    show={this.state.showNewBookModal} 
                    hide={this.hideNewBookModal} 
                    submitBook={this.submitBook}
                    dark={this.state.dark}
                />
            </>
        )
    }

}