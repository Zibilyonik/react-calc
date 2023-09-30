import { useState, useRef } from "react";
import "./Display.css";

function Display() {
    const [total, setTotal] = useState(0);
    const inputRef = useRef();
    function clear() {
        inputRef.current.value = "0";
    }
    function add() {
        setTotal(total + Number(inputRef.current.value));
        clear();
    }
    function subtract() {
        setTotal(total - Number(inputRef.current.value));
        clear();
    }
    function multiply() {
        setTotal(total * Number(inputRef.current.value));
        clear();
    }
    function divide() {
        setTotal((total / Number(inputRef.current.value)).toFixed(2));
        clear();
    }
    function reset() {
        setTotal(0);
        clear();
    }
    return (
        <div className="Display">
            <h1>Calculator</h1>
            <input ref={inputRef} type="number" />
            <div className="Buttons">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
            </div>
            <div className="ButtonsBig">
                <button onClick={clear}>Clear</button>
                <button onClick={reset}>Reset</button>
            </div>
            <h2>Total: {total}</h2>
        </div>
    );
}

export default Display;