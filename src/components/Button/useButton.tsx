import React from 'react';

import { Icon, Loader, Content } from './styled';
import { ButtonProps } from './types';

export default function useButton<T = unknown>({
  icon,
  iconAlign,
  children,
  isLoading,
  isInline,
  $type,
  ...rest
}: ButtonProps<T>) {
  const isIconOnly = !!icon && !children;
  const align = iconAlign || (isIconOnly ? 'default' : 'right');
  const innerIsInline = isInline === undefined ? $type === 'link' : isInline;

  return {
    ...rest,
    icon,
    iconAlign,
    isLoading,
    $type,
    isInline: innerIsInline,
    children: (
      <>
        {isLoading && <Loader />}
        <Content>{children}</Content>
        {!!icon && <Icon align={align}>{icon}</Icon>}
      </>
    ),
  };
}
