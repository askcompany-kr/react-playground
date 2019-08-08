import { useEffect, useRef } from 'react';


const usePrevious = (value) => {
    const valueRef = useRef(null);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef.current;
};


export default usePrevious;
