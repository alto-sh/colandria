import { css } from "emotion";

const Styles = {
    bookPanel: css`
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

            &:hover {
                cursor: pointer;
                transform: scale(1.04);
            }
        }
        
        & p { 
            margin-bottom: 30px; 
            color: #666; 
            font-size: 14pt; 
            font-weight: normal;
            font-family: 'Poppins', sans-serif !important;
        }
    `,
    bookPanelDark: css`
        background: rgba(255, 255, 255, 0.1);
        & h1 {
            color: white;
        }
    `,
    bookPanelLight: css`
        background: whitesmoke;
    `,
    activeBook: css`
        transition: all 0.5s;
        display: inline-block;
        font-size: 50pt;
        font-weight: bold;

        animation: bgColor 10s infinite linear;

        @keyframes bgColor {
            16.6% { color: #0000FF; }
            50% { color: #9932CC; }
            88.6% { color: #FF1493; }
            100% { color: #0000FF; }
        }
    `
}

export default Styles;