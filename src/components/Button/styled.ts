import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as LoaderIcon } from '@assets/icons/loader.svg';

// loader
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(LoaderIcon)`
  display: none;
  position: absolute;
  margin: auto;
  animation: ${rotate} 0.8s linear infinite;
`;

export type IconAlign = 'left' | 'right' | 'default';

const Icon = styled.span<{ align?: IconAlign }>`
  font-size: 0;
  line-height: 0;

  ${(props) =>
    props.align === 'left' &&
    css`
      margin-right: ${props.theme.spaces.s8};
      order: -1;
    `}

  ${(props) =>
    props.align === 'right' &&
    css`
      margin-left: ${props.theme.spaces.s8};
    `}
`;

const Content = styled.span`
  white-space: nowrap;
`;

export type Type = 'default' | 'secondary' | 'link' | 'outlined';

export interface StyledButtonProps {
  $type?: Type;
  isInline?: boolean;
  isIconOnly?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

// outlined
const buttonOutlinedStyles = css<StyledButtonProps>`
  color: ${(props) => props.theme.colors.buttonColor_outlined};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.buttonBorder_outlined};
  background-color: transparent;

  ${(props) =>
    props.isDisabled
      ? css`
          color: ${props.theme.colors.buttonColor_outlined_disabled};
          border-color: ${props.theme.colors.buttonBorder_outlined_disabled};
          background-color: transparent;
        `
      : css`
          &:hover {
            color: ${props.theme.colors.buttonColor_outlined_hover};
            border-color: ${props.theme.colors.buttonBorder_outlined_hover};
            background-color: transparent;
          }
          &:active {
            color: ${props.theme.colors.buttonColor_outlined_active};
            border-color: ${props.theme.colors.buttonBorder_outlined_active};
            background-color: transparent;
          }
        `};
`;

// link
const buttonLinkStyles = css<StyledButtonProps>`
  height: auto;
  padding: 0;
  color: ${(props) => props.theme.colors.buttonColor_link};
  background-color: transparent;

  ${(props) =>
    props.isDisabled
      ? css`
          color: ${props.theme.colors.buttonColor_link_disabled};
          background-color: transparent;
        `
      : css`
          &:hover {
            color: ${props.theme.colors.buttonColor_link_hover};
            background-color: transparent;
          }
          &:active {
            color: ${props.theme.colors.buttonColor_link_active};
            background-color: transparent;
          }
        `};
`;

const buttonStyles = css<StyledButtonProps>`
  position: relative;
  width: ${(props) => (props.isInline ? 'auto' : '100%')};
  height: 48px;
  padding: 0 ${(props) => props.theme.spaces.s24};
  display: ${(props) => (props.isInline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
  border-radius: ${(props) => props.theme.borderRadius.r12};
  color: ${(props) => props.theme.colors.buttonColor};
  background-color: ${(props) => props.theme.colors.buttonBg};

  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: none;

      ${Loader} {
        display: inline;
      }
      ${Content}, ${Icon} {
        visibility: hidden;
      }
    `};

  ${(props) =>
    props.isDisabled
      ? css`
          cursor: not-allowed;
          color: ${props.theme.colors.buttonColor_disabled};
          background-color: ${props.theme.colors.buttonBg_disabled};
        `
      : css`
          &:hover {
            background-color: ${props.theme.colors.buttonBg_hover};
          }
          &:active {
            background-color: ${props.theme.colors.buttonBg_active};
          }
        `};

  ${(props) =>
    props.isIconOnly &&
    css`
      ${Icon} {
        margin: 0;
      }
    `}

  // outlined
  ${(props) => props.$type === 'outlined' && buttonOutlinedStyles};

  // link
  ${(props) => props.$type === 'link' && buttonLinkStyles};
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles};
`;

const StyledLink = styled.a<StyledButtonProps>`
  ${buttonStyles};

  line-height: inherit;

  ${(props) =>
    props.$type === 'link' &&
    !props.isDisabled &&
    css`
      &:visited {
        color: ${props.theme.colors.buttonColor_link_visited};
        background-color: transparent;
      }
    `};
`;

export { StyledButton, StyledLink, Icon, Loader, Content };
