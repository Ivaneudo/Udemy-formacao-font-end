import { useState } from "react";

export function useForm (steps) {
    const [currestStep, setCurrestStep] = useState(0)

    function changesStep (i, e) {
        if (e) e.preventDefault();

        if (i < 0 || i >= steps.length) return

        setCurrestStep(i)
    }
    
    return {
        currestStep, 
        currentComponent: steps[currestStep],
        changesStep,
        isLastStep: currestStep + 1 === steps.length ? true : false,
        isFirstStep: currestStep === 0 ? true : false
    };
}