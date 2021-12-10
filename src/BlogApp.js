import React from 'react'
import {AppRouter} from './routers/AppRouter'
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const BlogApp = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
    )
}
