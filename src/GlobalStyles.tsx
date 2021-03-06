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
    genericPanel: css`
        border-radius: 1.25rem;
        padding: 30px;
        text-align: center;

        &, & h1 { 
            font-weight: bold; 
            transition: all .25s;
        }
        
        & h1 { 
            margin: 30px; 
            font-size: 34pt; 
            margin-bottom: 10px; 
        }
        
        & p { 
            margin-bottom: 30px; 
            color: #666; 
            font-size: 14pt; 
            font-weight: normal;
            font-family: 'Poppins', sans-serif !important;
        }
    `,
    genericPanelDark: css`
        background: rgba(255, 255, 255, 0.1);
        & h1 { color: white }
    `,
    genericPanelLight: css`
        background: whitesmoke;
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
    `,
    amazonButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            background: #FF9900 !important;
            border-color: #FF9900 !important;
            color: #333;
            border-width: 4px;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.9;
            transform: scale(1.02);
            color: black !important;
        }
    `,
    goodreadsButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            background: #e9e5cd !important;
            border-color: #e9e5cd !important;
            color: #333;
            border-width: 4px;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.9;
            transform: scale(1.02);
            color: black !important;
        }
    `,
    glassButton: css`
        text-align: center;
        border-radius: 1rem;
        width: 100%;
        padding: 17px;
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;
        transition: all .25s;

        /* Colors */
        &, &:hover, &:active {
            border: 0;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            opacity: 0.9;
            transform: scale(1.02);
        }
    `,
    glassButtonDark: css`
        &, &:hover, &:active {
            background: rgba(255, 255, 255, 0.1) !important;
            color: white;
        }
    `,  
    glassButtonLight: css`
        &, &:hover, &:active {
            background: whitesmoke !important;
            color: black !important;
        }
    `
}

export default Styles;