import React, { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";

const useAlan = () => {
    const { setMode } = useContext(ColorModeContext);

    useEffect(() => {
        alanBtn({
            key: "aa44334b0d8df7afa8d2dde33247a6562e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: ({ command, mode }) => {
                if (command === "changeMode") {
                    if (mode === "light") {
                        setMode("light");
                    } else {
                        setMode("dark");
                    }
                }
            },
        });
    }, []);
};

export default useAlan;
