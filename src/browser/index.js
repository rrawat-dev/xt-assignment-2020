import React from 'react';
import {hydrate} from 'react-dom';
import { Provider } from 'react-redux'

import GlobalStyle from '../../styles/global.style';
import { configureStore } from '../../redux/store';
import * as REACT_PAGES from '../../tmp/reactPagesClientModule';

if (__REACT_SSR_PAGE__) {
    (REACT_PAGES[__REACT_SSR_PAGE__]).then((module) => {
        const store = configureStore(window.__REACT_SSR_APP_STATE__ || {});
        const Component = module.default;
        hydrate(
            <Provider store={store}>
                <GlobalStyle />
                <Component />
            </Provider>, 
            document.getElementById('root')
        );
    });
}