import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {AsyncAboutPage} from "./components/pages/AboutPage/AboutPage.async";
import AsyncMainPage from "./components/pages/MainPage/MainPage.async";
import { classNames } from "./helpers/classNames";
import "./styles/index.scss"
import { useTheme } from "./theme/useTheme";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AsyncAboutPage/>}/>
                    <Route path={'/'} element={<AsyncMainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;