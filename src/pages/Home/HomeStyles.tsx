import { css } from "emotion";

const Styles = {
    welcomeWidget: css`
        transition: all .5s;
        border-radius: 1.25rem;
        background: whitesmoke;
        padding: 30px;

        &, & h1 { font-weight: bold; }
        
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
    handWave: css`
        animation-name: wave-animation; 
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;

        @keyframes wave-animation {
            0% { transform: rotate( 0.0deg) }
            10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
            20% { transform: rotate(-8.0deg) }
            30% { transform: rotate(14.0deg) }
            40% { transform: rotate(-4.0deg) }
            50% { transform: rotate(10.0deg) }
            60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
            100% { transform: rotate( 0.0deg) }
        }
    `
}

export default Styles;