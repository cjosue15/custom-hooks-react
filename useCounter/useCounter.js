import { useState } from 'react';

const useCounter = (inicialState = 10) => {
    const [counter, setCounter] = useState(inicialState);

    const increment = (factor) => {
        setCounter(counter + factor);
    };

    const decrement = (factor) => {
        setCounter(counter - factor);
    };

    const reset = () => {
        setCounter(inicialState);
    };

    return { counter, increment, decrement, reset };
};

export default useCounter;
