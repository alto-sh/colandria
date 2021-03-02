import { css } from "emotion";

const Styles = {
    pageStyles: css`
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        transition: all .25s;
    `,
    darkTheme: css`
        background: #121212;
    `,
    lightTheme: css`
        background: #FBFAF5;
    `,
    innerFrame: css`
        width: 100%;
        max-width: 980px;
        display: table;
        margin-left: auto;
        margin-right: auto
    `,
    headerStyles: css`
        margin: 20px;

        &, & h1 {
           transition: all 0.5s;
           display: inline-block;
           font-size: 50pt;
           font-weight: bold;
           font-family: 'Josefin Sans', serif;
        }

        & h1 {
            animation: bgColor 10s infinite linear;

            @keyframes bgColor {
                16.6% { color: #0000FF; }
                50% { color: #9932CC; }
                88.6% { color: #FF1493; }
                100% { color: #0000FF; }
            }
        }
        
        &:hover {
            cursor: pointer;

            & h1 { font-size: 54pt !important; }
        }
    `,
    bodyStyles: css`
        padding: 30px;
    `
}

export default Styles;