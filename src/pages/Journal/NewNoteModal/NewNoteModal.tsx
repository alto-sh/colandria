import React from "react";

import { cx } from "emotion";
import Styles from "./NewNoteModalStyles";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GlobalStyles from "../../../GlobalStyles";

import netlifyIdentity from "netlify-identity-widget";
import Config from "../../../helpers/httpconfig";
import BookType from "../../../types/Book";
import $ from "jquery";

type Props = {
    show: boolean,
    hide: Function,
    dark?: boolean,
    submitNote: Function
};
type State = {
    books: BookType[],
    optionSelected: any
};

export default class NewNoteModal extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            books: [],
            optionSelected: null
        }

        this.loadData();
    }

    compileNote() {
        //@ts-ignore
        const book_field: string = $("#book-field").val();
        const book_id: number = this.state.books.filter(book => book.NAME === book_field)[0].ID;

        return {
            user_id: netlifyIdentity.currentUser().id,
            header: $("#header_field").val(),
            body: $("#body_field").val(),
            book_id: book_id
        };
    }

    async loadData() {
        const books = (await this.getBooks()).results;
        this.setState({ books: this.state.books.concat(books) });
    }

    async getBooks(): Promise<{ success: boolean, results: BookType[] }> {
        return await fetch(`${Config.backend_base_url}/journal/entry/get/${netlifyIdentity.currentUser().id}`)
                    .then(res => res.json());
    }

    render() {
        const theme = (this.props.dark ? Styles.newNoteModalDark : Styles.newNoteModalLight);

        return (
            <Modal show={this.props.show} onHide={this.props.hide} className={cx( Styles.newNoteModal, theme )} size="lg" centered>
                <Modal.Header style={{ width: "100%", borderBottom: 0 }}>
                    <h2>Make a Note</h2>
                </Modal.Header>
                <Modal.Body className={cx( Styles.newBookModalBody )}>
                    <Form>
                        <Form.Group controlId="book">
                            <Form.Control 
                                placeholder="Select a Book..." 
                                id="book-field"
                                as="select"
                                value={this.state.optionSelected}
                                onChange={(e) => { this.setState({ optionSelected: e.target.value }); }}
                            >
                                {
                                    this.state.books.map(book => <option>{book.NAME}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="header">
                            <Form.Control 
                                placeholder="Note Header..." 
                                className="form-control-mod"
                                id="header_field"
                                size="lg"
                            />
                        </Form.Group>
                        <Form.Group controlId="body">
                            <Form.Control 
                                placeholder="Note Body..." 
                                className="form-control-mod"
                                id="body_field"
                                as="textarea"
                                size="lg"
                            />
                        </Form.Group>
                    </Form>
                    <div id="button-area">
                        <Button className={cx( GlobalStyles.coloredButton )} style={{ marginBottom: 10 }} onClick={() => { this.props.submitNote(this.compileNote()); }}>
                            Submit
                        </Button>
                        <Button className={cx( GlobalStyles.negativeButton )} onClick={() => { this.props.hide(); }}>
                            Cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal> 
        )
    }

}