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
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            background: var(--indigo) !important;
            border-color: var(--indigo) !important;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.9;
            transform: scale(1.02);
        }
    `,
    lightButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;
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
            opacity: 0.9;
            transform: scale(1.02);
            color: #333 !important;
        }
    `,
    negativeButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            background: var(--danger) !important;
            border-color: var(--danger) !important;
            color: white;
            border-width: 4px;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.9;
            transform: scale(1.02);
            color: white !important;
        }
    `
}

export default Styles;