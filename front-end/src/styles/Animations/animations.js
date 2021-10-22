import { keyframes } from 'styled-components';


export const ring = keyframes`
            0% {
              width: 150px;
              height: 10px;
              opacity: 1;
            }
            100% {
              width: 180px;
              height: 60px;
              opacity: 0;
            }
`; 

export const gradient = keyframes` 
    0% { 
        background-position: 0% 50% 
    }
    50% { 
        background-position: 100% 50% 
    }
    100% { 
        background-position: 0% 50% 
    }
`

export const fadeInFromNone = keyframes`
 0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`
