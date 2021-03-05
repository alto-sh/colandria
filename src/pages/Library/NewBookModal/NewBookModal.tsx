import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { cx } from "emotion";
import Styles from "./NewBookModalStyles";
import { X as Cross } from "react-feather";
import GlobalStyles from "../../../GlobalStyles";

import $ from "jquery";
import Book from "../../../types/Book";

type Props = {
    show: boolean,
    hide: Function,
    submitBook: Function,
    dark?: boolean
};
type State = {};

export default class NewBookModal extends React.Component<Props, State> {

    compileBook() {
        return {
            name: $("#title_field").val() as string,
            author: $("#author_field").val() as string,
            img_url: " ",
            amazon_link: $("#amzn_link_field").val() as string,
            goodreads_link: $("#gdrs_link_field").val() as string
        };
    }

    render() {
        const theme = (this.props.dark ? Styles.newBookModalDark : Styles.newBookModalLight);

        return (
            <Modal show={this.props.show} onHide={this.props.hide} className={cx( Styles.newBookModal, theme )} size="lg" centered>
                <Modal.Header style={{ width: "100%", borderBottom: 0 }}>
                    <h2>Add a New Book</h2>
                </Modal.Header>
                <Modal.Body className={cx( Styles.newBookModalBody )}>
                    <Form>
                        <Form.Group controlId="formLessonHeader">
                            <Form.Control 
                                placeholder="Book Title..." 
                                id="title_field"
                                size="lg"
                            />
                        </Form.Group>
                        <Form.Group controlId="formLessonHeader">
                            <Form.Control 
                                placeholder="Author..." 
                                id="author_field"
                                size="lg"
                            />
                        </Form.Group>
                        <Form.Group controlId="formLessonHeader">
                            <Form.Control 
                                placeholder="Amazon Link..." 
                                id="amzn_link_field"
                                size="lg"
                            />
                        </Form.Group>
                        <Form.Group controlId="formLessonHeader">
                            <Form.Control 
                                placeholder="Goodreads Link..." 
                                id="gdrs_link_field"
                                size="lg"
                            />
                        </Form.Group>
                    </Form>
                    <div id="button-area">
                        <Button className={cx( GlobalStyles.coloredButton )} style={{ marginBottom: 10 }} onClick={() => { this.props.submitBook(this.compileBook()); }}>
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