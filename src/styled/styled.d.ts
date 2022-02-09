import 'styled-components';

// declaring type of styled-components theme
import mainTheme from './themes/mainTheme';

declare module 'styled-components' {
  type Theme = typeof mainTheme;
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
