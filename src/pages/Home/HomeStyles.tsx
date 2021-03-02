import { css } from "emotion";

const Styles = {
    welcomeWidget: css`
        transition: all .5s;
        border-radius: 1.25rem;
        background: whitesmoke;
        padding: 30px;
        
        &, & h1 { font-weight: bold; }
        & h1 { margin: 30px }
    `
}

export default Styles;