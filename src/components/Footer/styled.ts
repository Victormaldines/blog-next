import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small}
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
  `}
`;
