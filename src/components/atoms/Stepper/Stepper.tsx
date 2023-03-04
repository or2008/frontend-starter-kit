import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';
import Text, { TextProps } from '../Text/Text';
import Step from './Step';

export interface StepperProps {
    className?: string;
    steps: string[];
    currentStepIndex: number;
}

const Stepper: FC<PropsWithChildren<StepperProps>> = props => {
    const { steps, currentStepIndex, children, className = '' } = props;

    function getBaseClassname() {
        return twMerge(`transition flex items-center w-full
        text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:text-base`,
        className);
    }

    function renderStep(text: string, stepIndex: number) {
        const isActive = stepIndex === currentStepIndex;
        const isLast = stepIndex === steps.length - 1;

        return <Step isActive={isActive} isLast={isLast} key={stepIndex} stepNumber={stepIndex + 1} text={text}  />;
    }

    function renderSteps() {
        return steps.map(renderStep);
    }

    function renderContent() {
        return (
            <ol className={getBaseClassname()}>
                {renderSteps()}
            </ol>
        );
    }

    return (
        <ol className={getBaseClassname()}>
            {renderContent()}
        </ol>
    );
};

export default Stepper;
