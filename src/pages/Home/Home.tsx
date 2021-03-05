import React from "react";

import { cx } from "emotion";
import GlobalStyles from "../../GlobalStyles";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import netlifyIdentity from "netlify-identity-widget";

import Page from "../../types/Page";
import WelcomeWidget from "./WelcomeWidget/WelcomeWidget";
import UserPanel from "./UserPanel/UserPanel";
import Book from "../../widgets/Book/Book";
import BookType from "../../types/Book";
import Config from "../../helpers/httpconfig";

import $ from "jquery";

type Props = {};
type State = {
    dark: boolean,
    userIsAuthenticated: boolean,
    user: netlifyIdentity.User | null,
    books: BookType[]
};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const { userIsAuthenticated, user } = this.initializeAuth();

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;

        this.state = {
            dark: dark,
            userIsAuthenticated: userIsAuthenticated,
            user: user,
            books: []
        }

        this.loadData();

        // Method Bindings
        this.setUserIsAuthenticated = this.setUserIsAuthenticated.bind(this);
        this.setUserIsNotAuthenticated = this.setUserIsNotAuthenticated.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

    initializeAuth(): { userIsAuthenticated: boolean, user: netlifyIdentity.User } {
        netlifyIdentity.init({
            locale: 'en' // defaults to 'en'
        });

        // Bindings
        const outerThis = this;
        netlifyIdentity.on("login", () => { outerThis.setUserIsAuthenticated(outerThis); });
        netlifyIdentity.on("logout", () => { outerThis.setUserIsNotAuthenticated(outerThis); });

        const user = netlifyIdentity.currentUser();
        return {
            userIsAuthenticated: !!user,
            user: user
        };
    }

    componentDidMount() {
        $(window).on("scroll", () => {
            var scrollHeight = $(document).height();
            var scrollPos = $(window).height() + $(window).scrollTop();
            // @ts-ignore
            if ((scrollHeight as number - Math.floor(scrollPos)) / scrollHeight as number == 0) {
                this.loadData();
            }
        });
    }

    async loadData() {
        const books = (await this.getBooks(10)).results;
        this.setState({ books: this.state.books.concat(books) });
    }

    async getBooks(limit: number): Promise<{ success: boolean, results: BookType[] }> {
        return await fetch(`${Config.backend_base_url}/book/get/${limit}`)
                    .then(res => res.json());
    }

    setUserIsAuthenticated(outerThis: React.Component) {
        outerThis.setState({ userIsAuthenticated: true });
    }
    
    setUserIsNotAuthenticated(outerThis: React.Component) {
        outerThis.setState({ userIsAuthenticated: false });
    }

    openNetlifyIdentity(tab: 'login'|'signup') {
        netlifyIdentity.open(tab);
    }

    logout() {
        netlifyIdentity.logout();
    }

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <Template currentPage={Page.HOME} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                {
                    !this.state.userIsAuthenticated || !this.state.user ? (
                        /* If the user is not authenticated */
                        <WelcomeWidget dark={this.state.dark} openNetlifyIdentity={this.openNetlifyIdentity}/>
                    ) : (
                        /* If the user is authenticated */
                        <UserPanel dark={this.state.dark} user={this.state.user} logout={this.logout}/>
                    )
                }
                <br/>
                {
                    this.state.books.map(book => (
                        <Book 
                            book={book} 
                            dark={this.state.dark}
                            userIsAuthenticated={this.state.userIsAuthenticated}
                            userId={this.state.user ? this.state.user.id : ""}
                        />
                    ))
                }
            </Template>
        )
    }

}