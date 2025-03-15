import React, { createContext, useContext } from "react";

export const DarkToggleContext = createContext({
    theme:'light',
    Darkmode: ()=>{},
    Lightmode: ()=>{},
});


export const DarkToggleProvider = DarkToggleContext.Provider

export const UseDark = ()=>{
    return useContext(DarkToggleContext)
}