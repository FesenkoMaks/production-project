import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../libs/ThemeContaxt";

const ThemeProvider: FC = ({ children }) => {

    const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeProvider;