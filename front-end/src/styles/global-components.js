import styled, { css } from "styled-components";

// Global Container component Style
export const Container = styled.div`
    ${({ display, justify, align, padding, margin, background}) => css`
        display: ${display};
        justify-content: ${justify};
        align-items: ${align};
        padding:${padding? padding : 0};
        margin:${margin? margin : 0};
        background: ${background? background:'white'};
        `
    }`
;