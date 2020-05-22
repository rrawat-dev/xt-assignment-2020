import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; 
import { Provider } from 'react-redux'

import GlobalStyle from '../../../styles/global.style';
import { configureStore } from '../../../redux/store';
import * as REACT_PAGES from '../../../tmp/reactPagesServerModule';

export default function(options) {
    //const manifest = require('../../dist/client/manifest.json');
    return async function (req, res, next) {
        const basepath = req.path === '/' ? 'index' : req.path.split('/')[1];
        const page = REACT_PAGES[basepath] ? basepath : 'error';
        const store = configureStore();
        const sheet = new ServerStyleSheet();
        const PageComponent = REACT_PAGES[page];
        
        const context = {
            req, 
            res, 
            store
        };

        const props = await (PageComponent.getServerSideProps ? PageComponent.getServerSideProps(context) : Promise.resolve({}));
        //console.log('props: ', props);
        const html = renderToString(sheet.collectStyles(
            <Provider store={store}>
                <GlobalStyle />
                <PageComponent />
            </Provider>
        ));
        const styles = sheet.getStyleTags();

        res.react = {
            page,
            styles,
            html,
            reduxState: store.getState()
        };

        next();
    };
};