import React from "react";

import { cx } from "emotion";
import Styles from "./JournalStyles";
import Template from "../Template/Template";
import Page from "../../types/Page";

import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";
import $ from "jquery";
import Button from "react-bootstrap/esm/Button";
import GlobalStyles from "../../GlobalStyles";
import Note from "../../widgets/Note/Note";
import Config from "../../helpers/httpconfig";
import NoteType from "../../types/Note";
import NewNoteModal from "./NewNoteModal/NewNoteModal";

type Props = {};
type State = {
    dark: boolean,
    notes: NoteType[],
    showNewNoteModal: boolean
};

export default class Journal extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        let dark: boolean = false;
        const darkModeStr: string = window.localStorage.getItem("darkMode");
        if (darkModeStr === "true") dark = true;
        if (darkModeStr === "false") dark = false;

        this.state = {
            dark: dark,
            notes: [],
            showNewNoteModal: false
        }

        // Method Bindings
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.openNewNoteModal = this.openNewNoteModal.bind(this);
        this.hideNewNoteModal = this.hideNewNoteModal.bind(this);
        this.submitNote = this.submitNote.bind(this);

        this.initializeAuth();
    }

    async loadData() {
        const notes = (await this.getNotes()).results;
        console.log(notes);
        this.setState({ notes: this.state.notes.concat(notes) });
    }

    async getNotes(): Promise<{ success: boolean, results: NoteType[] }> {
        return await fetch(`${Config.backend_base_url}/note/get/${netlifyIdentity.currentUser().id}`)
                    .then(res => res.json());
    }

    initializeAuth() {
        netlifyIdentity.init({
            locale: 'en' // defaults to 'en'
        });

        netlifyIdentity.on("close", () => {
            const user = netlifyIdentity.currentUser();
            if (!user) window.location.href = window.location.origin;
        });

        const user = netlifyIdentity.currentUser();
        if (!user) netlifyIdentity.open()
        else this.loadData();
    }

    toggleDarkMode() {
        window.localStorage.setItem("darkMode", (!this.state.dark ? "true" : "false"));
        this.setState({ dark: !this.state.dark });
    }

    openNewNoteModal() {
        this.setState({ showNewNoteModal: true });
    }

    hideNewNoteModal() {
        this.setState({ showNewNoteModal: false });
    }

    submitNote(note: any) {
        fetch(`${Config.backend_base_url}/note/create`, {
            headers: {
                "Content-Type": "application/json",
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
            },
            "mode": "cors",
            "method": "POST",
            body: JSON.stringify(note)
        });
        this.setState({ showNewNoteModal: false });
    }

    render() {
        const panelTheme = (this.state.dark ? GlobalStyles.genericPanelDark : GlobalStyles.genericPanelLight);

        return (
            <>
                <Template currentPage={Page.JOURNAL} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}>
                    <div className={cx( GlobalStyles.genericPanel, panelTheme )}>
                        <Button className={cx( GlobalStyles.coloredButton )} onClick={this.openNewNoteModal}>
                            🖊&nbsp;&nbsp;New Note
                        </Button>
                    </div>
                    <br/>
                    {
                        this.state.notes.map(note => <Note dark={this.state.dark} note={note}/>)
                    }
                </Template>
                {
                    !!netlifyIdentity.currentUser() ? (
                        <NewNoteModal 
                            dark={this.state.dark} 
                            show={this.state.showNewNoteModal}
                            hide={this.hideNewNoteModal}
                            submitNote={this.submitNote}
                        />
                    ) : null
                }
            </>
        )
    }

}