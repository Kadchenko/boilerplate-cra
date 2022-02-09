import React, { AnchorHTMLAttributes } from 'react';

import { StyledLink } from './styled';
import { ButtonProps } from './types';
import useButton from './useButton';

const Link: (props: ButtonProps<AnchorHTMLAttributes<HTMLAnchorElement>>) => JSX.Element = (props) => {
  const modifiedProps = useButton<AnchorHTMLAttributes<HTMLAnchorElement>>(props);

  return <StyledLink {...modifiedProps} />;
};

export default Link;
