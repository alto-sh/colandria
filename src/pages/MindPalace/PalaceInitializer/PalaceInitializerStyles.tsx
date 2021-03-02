import { css } from "emotion";

const Styles = {
    panelStyles: css`
        border-radius: 1.25rem;
        padding: 30px;
        text-align: center;

        & h1 {
            font-weight: bold;
        }

        & p { 
            margin-bottom: 30px; 
            color: #666; 
            font-size: 14pt; 
            font-weight: normal;
            font-family: 'Poppins', sans-serif !important;
        }
    `,
    darkTheme: css`
        background: rgba(255, 255, 255, 0.1);
        color: white;
    `,
    lightTheme: css`
        background: whitesmoke;
    `,
    timer: css`
        font-weight: bold;
        font-size: 80pt;
        margin: 40px;
    `,
    musicCategoryButton: css`
        border-radius: 1rem;
        border: 4px solid #DCDCDC;
        padding: 20px;
        transition: all 0.25s;
        margin: 10px 0px;
        font-size: 20pt;
        font-family: 'Poppins', sans-serif;

        &, &:hover, &:active {
            background: white !important;
            border-color: #DCDCDC !important;
            color: #666;
            border-width: 4px;
            box-shadow: none !important;
            outline: none !important;
        }

        &:hover {
            cursor: pointer;
            opacity: 0.9;
            transform: scale(1.02);
            color: #333 !important;
        }
    `,
    musicCategoryButtonDark: css`
        &, &:hover, &:active {
            color: white !important;
            background: rgba(255, 255, 255, 0.1) !important;
        }
    `,
    musicCategoryButtonLight: css`
        background: white;
    `,
    activeMusicCategoryButton: css`
        transform: scale(1.02);

        &, &:hover, &:active {
            border-color: var(--primary) !important;
        }
    `
}

export default Styles;