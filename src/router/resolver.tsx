import { Navigate } from 'react-router-dom';
import { createElement, JSXElementConstructor } from 'react';

import store, { RootState } from '@store';

type CallbackFn = (store: RootState) => boolean;

const resolver =
  (callback: CallbackFn, redirectUrl: string) => (component: JSXElementConstructor<any>) => (props: any) => {
    const isResolved = callback(store.getState());

    if (isResolved) {
      return createElement(component, props);
    }

    return <Navigate to={redirectUrl} />;
  };

export default resolver;
