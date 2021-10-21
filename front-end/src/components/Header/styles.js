import styled , { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        background: ${theme.colors.primaryColor};
        height: 120px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        `
    };
`