import { css } from "emotion";

const Styles = {
    newNoteModal: css`
        font-family: Poppins, sans-serif;
        text-align: center;
        padding: 30px;

        & h2 { 
            font-weight: bold;
            margin: 10px;
            width: 100%;
            text-align: center;
        }

        & .modal-content {
            border-radius: 1rem;
            border: none;
            padding: 20px;
        }

        & .form-control-mod {
            border-radius: 1rem;
            font-size: 20pt;
            padding: 35px;
            text-align: center;

            &, &:hover, &:active {
                outline: 0 !important;
                box-shadow: none !important;
            }
        }

        & #book-field {
            border-radius: 1rem;
            font-size: 20pt;

            &, &:hover, &:active {
                outline: 0 !important;
                box-shadow: none !important;
            }
        }

        & #button-area {
            padding: 20px;
            border-radius: 1rem;
        }

        & .modal-content { background: 0 !important; }
    `,
    newNoteModalDark: css`
        background: rgba(0, 0, 0, 0.6) !important;
        color: white;

        & #button-area { background: rgba(255, 255, 255, 0.1); }
        & .form-control { background: white; }
    `,
    newNoteModalLight: css`
        background: rgba(0, 0, 0, 0.6) !important;
        
        & h2 { color: white; }
        & #button-area, & .form-control { background: whitesmoke; }
    `,
    newBookModalBody: css`
        padding: 20px;
    `,
    closeBtn: css`
        padding: 10px;
        transition: all 0.25s;
        border-radius: 50%;

        &:hover {
            background: whitesmoke;
            cursor: pointer;
        }
    `
}

export default Styles;