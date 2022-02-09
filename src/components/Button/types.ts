import React, { PropsWithChildren, ReactElement, SVGProps } from 'react';

import { IconAlign, StyledButtonProps } from './styled';

export interface BaseProps extends Omit<StyledButtonProps, 'isIconOnly'> {
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  iconAlign?: IconAlign;
  as?: string | React.ComponentType<any>;
}

export type ButtonProps<T> = PropsWithChildren<BaseProps & T>;
