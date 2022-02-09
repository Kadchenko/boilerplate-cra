// theme properties naming almost like in BEM, example: camelCaseElement_camelCaseModifier
const baseColors = {
  primary: '#0064FF',
  primary_hover: '#3383FF',
  primary_active: '#0050CC',
  white: '#fff',
  background: '#FBFBFF',
  disabled: '#EBECF3',
  danger: '#d93f3f',
  text: '#20333F',
};

const mainTheme = {
  colors: {
    ...baseColors,
    /* buttons */
    // default
    buttonColor: '#fff',
    buttonColor_disabled: '#fff',
    buttonBg: baseColors.primary,
    buttonBg_hover: baseColors.primary_hover,
    buttonBg_active: baseColors.primary_active,
    buttonBg_disabled: baseColors.disabled,
    // link
    buttonColor_link: baseColors.primary,
    buttonColor_link_hover: baseColors.primary_hover,
    buttonColor_link_active: baseColors.primary_active,
    buttonColor_link_visited: '#7B61FF',
    buttonColor_link_disabled: baseColors.disabled,
    // outlined
    buttonColor_outlined: baseColors.primary,
    buttonColor_outlined_hover: baseColors.primary_hover,
    buttonColor_outlined_active: baseColors.primary_active,
    buttonColor_outlined_disabled: baseColors.disabled,
    buttonBorder_outlined: baseColors.primary,
    buttonBorder_outlined_hover: baseColors.primary_hover,
    buttonBorder_outlined_active: baseColors.primary_active,
    buttonBorder_outlined_disabled: baseColors.disabled,
    /* buttons */
  },
  borderRadius: {
    r12: '12px',
  },
  spaces: {
    s8: '8px',
    s24: '24px',
  },
  fonts: {
    main: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
};

export default mainTheme;
