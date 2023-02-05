import { lazy } from 'react';

export const AsyncMainPage = lazy(() => new Promise( res => {
    setTimeout(() => {
        // @ts-ignore
        res(import('./MainPage'))
    }, 500)
}))