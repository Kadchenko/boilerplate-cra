enum ViewMode {
  XL = 'XL',
  LG = 'LG',
  MD = 'MD',
  SM = 'SM',
}
enum ViewModeWidth {
  XL = 1200,
  LG = 992,
  MD = 768,
  SM = 576,
}

const ViewModeQueries = {
  XL: `@media screen and (min-width: ${ViewModeWidth.XL}px)`,
  LG: `@media screen and (min-width: ${ViewModeWidth.LG}px)`,
  MD: `@media screen and (min-width: ${ViewModeWidth.MD}px)`,
  SM: `@media screen and (min-width: ${ViewModeWidth.SM}px)`,
};

export { ViewMode, ViewModeWidth, ViewModeQueries };
