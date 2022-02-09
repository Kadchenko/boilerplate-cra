import styled from 'styled-components';

import { Container } from '@layouts/common';

const Wrap = styled.footer`
  flex-shrink: 0;
  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export { Wrap };
