import { lazy } from 'react';

export const AsyncAboutPage = lazy(() => new Promise( res => {
    setTimeout(() => {
        // @ts-ignore
        res(import('./AboutPage'))
    }, 500)
}))