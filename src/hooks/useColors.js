import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
    const [color, setColor] = useState(getLastColor());
    const [colorsList, setColorList] = useState(getColorList());

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    };

    const handleSubmitSaveColor = (e) => {
        e.preventDefault();
        const copyColors = [color, ...colorsList];
        setColorList(copyColors);
    };

    const handleClickClearColors = () => {
        setColor("#f2f2f2");
        setColorList([]);
        localStorage.removeItem("colors");
    };

    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colorsList));
    }, [colorsList]);

    return{
        color,
        colorsList,
        handleChangeColor,
        handleClickClearColors,
        handleSubmitSaveColor,
    };
};