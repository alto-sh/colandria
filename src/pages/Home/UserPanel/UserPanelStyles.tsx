import { css } from "emotion";

const Styles = {
    userPanel: css`
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
    userPanelDark: css`
        background: rgba(255, 255, 255, 0.1);
        & h1 {
            color: white;
        }
    `,
    userPanelLight: css`
        background: whitesmoke;
    `,
}

export default Styles;