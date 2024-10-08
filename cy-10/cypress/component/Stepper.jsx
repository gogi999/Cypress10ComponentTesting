import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Stepper({ initial = 0, onChange = () => {} }) {
    const [count, setCount] = useState(initial);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
    };
    
    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        onChange(newCount);
    };
    
    return (
        <div data-testid="stepper">
            <button aria-label="decrement" onClick={decrement}>
                -
            </button>
            {count}
            <button aria-label="increment" onClick={increment}>
                +
            </button>
        </div>
    )
}
