import { css } from "emotion";

const Styles = {
    note: css`
        border-radius: 1.25rem;
        padding: 30px;
        text-align: center;

        &, & h1 { 
            font-weight: bold; 
            transition: all .25s;
        }
        
        & h1 { 
            margin: 15px; 
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
    noteDark: css`
        background: rgba(255, 255, 255, 0.1);
        & h1, & h3 {
            color: white;
        }
    `,
    noteLight: css`
        background: whitesmoke;
    `
}

export default Styles;