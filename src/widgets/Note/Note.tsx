import React from "react";

import { cx } from "emotion";
import Styles from "./NoteStyles";

import NoteType from "../../types/Note";
import BookType from "../../types/Book";
import Config from "../../helpers/httpconfig";

type Props = {
    note: NoteType,
    dark?: boolean
};
type State = {
    book: BookType | null
};

export default class Note extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            book: null
        }

        this.loadData();
    }

    async loadData() {
        const book: BookType = (await this.getBook()).results;
        this.setState({ book: book });
    }

    async getBook(): Promise<{ success: boolean, results?: BookType }> {
        return await fetch(`${Config.backend_base_url}/book/get/single/${this.props.note.BOOK_ID}`)
                     .then(res => res.json());
    }

    render() {
        const theme = (this.props.dark ? Styles.noteDark : Styles.noteLight);
        return (
            <>
                <div className={cx( Styles.note, theme )}>
                    <h1>{this.props.note.HEADER}</h1>
                    {
                        this.state.book ? <h3>📖&nbsp;&nbsp;{this.state.book.NAME}</h3> : null
                    }
                    <br/>
                    <p>{this.props.note.BODY}</p>
                </div>
                <br/>
            </>
        )
    }

}