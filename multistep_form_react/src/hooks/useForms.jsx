import { useState } from "react";

export function useForms(steps) {
    const [currentStep, setCurrentStep] = useState(0)
    return {
        currentStep,
        currentComponent: steps[currentStep],   }

    }