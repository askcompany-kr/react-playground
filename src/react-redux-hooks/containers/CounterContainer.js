import React from 'react';
import { useSelector } from "react-redux";
import { increment, decrement } from '../modules/counter';
import Counter from "../components/Counter";
import useActions from "../../hooks/useActions";


const CounterContainer = () => {
    // ./modules/counter.js에서 export 된 값들 : counter, increment, decrement

    const counter = useSelector(state => state.counter, []);

    const [onIncrease, onDecrease] = useActions([increment, decrement], []);

    return (
        <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};


export default CounterContainer;
