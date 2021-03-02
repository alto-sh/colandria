import { css } from "emotion";
import tw from "twin.macro";

const Styles = {
    pageStyles: css`
        min-height: 100vh;
        background: #FBFAF5;

        & h1, h2, h3, h5, h6 {
            font-family: 'Josefin Sans', serif;
            padding: 20px;
        }

        & p {
            font-family: 'Titilium Web', sans-serif;
        }
    `,
    innerFrame: css`
        width: 980px;
        max-width: 980px;
        display: table;
        margin-left: auto;
        margin-right: auto
    `,
    headerStyles: css`
        &, & h1 {
           transition: all 0.5s;
           display: inline-block;
           color: #333;
           font-size: 50pt;
           font-weight: bold;
        }
        
        &:hover {
            cursor: pointer;

            & h1 { font-size: 54pt !important; color: #666; }
        }
    `
}

export default Styles;