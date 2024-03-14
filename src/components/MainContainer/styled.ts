import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 96rem; // 960px
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `};
`;
