import { useState } from 'react';


export interface UseHover {
    isHover: boolean,
    bindHover: {
        onTouchStart: () => void,
        onTouchEnd: () => void,
        onMouseEnter: () => void,
        onMouseLeave: () => void,

    }
}
export default function useHover(): UseHover {
    const [isHover, setIsHover] = useState(false);
    return {
        isHover,
        bindHover: {
            onTouchStart: () => setIsHover(true),
            onTouchEnd: () => setIsHover(false),
            onMouseEnter: () => setIsHover(true),
            onMouseLeave: () => setIsHover(false)
        }
    };
}
