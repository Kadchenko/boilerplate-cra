import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styled';
import { ButtonProps } from './types';
import useButton from './useButton';

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: (props: ButtonProps<ButtonAttributes>) => JSX.Element = ({ isDisabled, ...rest }) => {
  const modifiedProps = useButton<ButtonAttributes>({ isDisabled, ...rest });

  return <StyledButton disabled={isDisabled} {...modifiedProps} />;
};

export default Button;
