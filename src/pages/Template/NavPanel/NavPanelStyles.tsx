import { css } from "emotion";
import tw from "twin.macro";

const Styles = {
    navBtnStyles: css`
        padding: 15px;
        border-radius: .7rem;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: semi-bold;
        font-size: 14pt;
        vertical-align: middle;
        transition: all .25s;
        margin: 0px 8px;

        & h4 {
            margin-bottom: 0px;
            vertical-align: middle;
            display: inline-block;
        }

        &:hover {
            background: whitesmoke;
            cursor: pointer;
        }
    `,
    lightActiveTheme: css`
        background: whitesmoke;
        & h4 { font-weight: bold !important; }
        cursor: pointer;
    `,
    darkActiveTheme: css`
        background: rgb(255, 255, 255, 0.1);
        & h4 { font-weight: bold !important; }
        color: white;
        cursor: pointer;
    `,
    darkTheme: css`
        color: white;
    `,
    lightTheme: css`
        color: #333;
    `
}

export default Styles;