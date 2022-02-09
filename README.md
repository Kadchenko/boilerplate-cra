# React (redux) boilerplate

##### React/Redux boilerplate on CRA (craco for modify) to easy start your project.🖖

# Stack

- React
- Redux
- Axios
- Styled-components
- @loadable/component
- Typescript
- Storybook
- Craco (create react app config override), see https://github.com/gsoft-inc/craco

# Folders structure

```sh
...
src/
├─ api/
├─ assets/
├─ components/
├─ helpers/
├─ hooks/
├─ layouts/
├─ pages/
├─ router/
├─ services/
├─ store/
   ├─ "entity"/
       ├─ slice.ts
       ├─ selectors.ts
   ├─ index.tsx
├─ styled/
├─ utils/
...
```

| Folder      | Description                                                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| api/        | Here you should create requests by http service from services/ to interact with your backend.                                                                                                                                                                             |
| assets/     | Contains images, fonts and other static elements your app need.                                                                                                                                                                                                           |
| components/ | You already know what is it and what you should do here. 😀                                                                                                                                                                                                               |
| helpers/    | Is more of a place where you store code architectural snippets which make your routine easier. (f.e localStorage to make get and set data easier).                                                                                                                  |
| hooks/      | Your own react hooks.                                                                                                                                                                                                                                                     |
| layouts/    | Layouts are reusable templates for pages. The layouts are responsible for content that appears on many pages, such as navigation menu or footer, etc.                                                                                                                     |
| pages/      | Pages are also react components, but they represent a page or screen of an app. These 1:1 with a route in the router/.                                                                                                                                                    |
| router/     | Configure your router here with react-router-config. Also has resolver.ts to protect some special routes like user account                                                                                                                                                |
| services/   | You can see a service like a self-contained module where you will define the core business logic of your application. We use axios, but you can use whatever else, just reconfigure **services/http.ts** service to use your fetching library.                            |
| store/      | Create your store and store entities here.💪 |
| styled/     | App global styles (including normalize or reset css, etc.) and themes.                                                                                                                                                                                                    |
| utils/      | Here you can place small snippets you can use throughout the application. Small functions to build bigger things with. (f.e debounce function).                                                                                                                           |

#### Examples:

- see starships *(/api/starships.ts, /store/starships, /pages/Home)* as example of store and api implementation
- also, you can find basic implementation of theme, layout, router, pages, etc. in respective folders

# Code style

#### We use airbnb code styling

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn storybook`

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab and you'll be greeted by a welcome screen. More about storybook you can find here 👉 https://storybook.js.org/docs/react/get-started/introduction
