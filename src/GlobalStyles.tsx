import { css } from "emotion";

const Styles = {
    FLAT_LINK: css`
        &:link {
            color: black;
            text-decoration:none;
        }
        &:visited {
            color: black;
            text-decoration:none;
        }
        &:hover {
            color: black;
            text-decoration:none;
        }
        &:active {
            color: black;
            text-decoration:none;
        }
    `,
    coloredButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 24pt;
        font-family: 'Josefin Sans', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            background: #FE4A49 !important;
            border-color: #FE4A49 !important;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.8;
            transform: scale(1.04);
        }
    `,
    lightButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 24pt;
        font-family: 'Josefin Sans', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            background: white !important;
            border-color: #DCDCDC !important;
            color: #666;
            border-width: 4px;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.8;
            transform: scale(1.04);
        }
    `
}

export default Styles;