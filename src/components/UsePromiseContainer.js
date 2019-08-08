import React from 'react';
import usePromise from "../hooks/usePromise";


const wait = () => {
    return new Promise(resolve => (
        setTimeout(() => resolve('Hello hooks'), 3000)
    ));
};


const UsePromiseContainer = () => {
    const [loading, resolved, error] = usePromise(wait, []);
    if (loading) return '로딩 중 ...';
    if (error) return '에러 발생 ...';
    if (!resolved) return null;
    return <div>{resolved}</div>;
};


export default UsePromiseContainer;
