import { createContext } from "react";

const theme = {
    litht: {
        background: "#eeeeee",
        textColor: "#444444",
    },
    dark: {
        background: "#444444",
        textColor: "#eeeeee",
    },
};


export const ThemeContext = createContext(theme.litht);