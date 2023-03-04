import { mergeProps } from '@/utils/merge-props';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';
import Text, { TextProps } from '../Text/Text';

export interface StepProps {
    className?: string;
    textProps?: Partial<TextProps>;
    stepNumber?: number;
    isActive?: boolean;
    isLast?: boolean;
    text: string;

}

const Step: FC<PropsWithChildren<StepProps>> = props => {
    const { children, className = '', isActive = false, isLast = false } = props;

    function getBaseClassname() {
        let _className = 'flex items-center';

        if (!isLast) {
            _className = twMerge(_className, `lg:w-full after:content-[''] after:w-full after:h-px after:bg-gray-200
            after:hidden lg:after:inline-block after:mx-6 dark:after:bg-gray-700`);
        }

        if (isActive)
            _className = twMerge(_className, 'text-blue-600 dark:text-blue-500');


        return twMerge(_className, className);
    }

    function getTextClassname() {
        return `flex items-center after:content-['/']
        lg:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500`;
    }

    function renderActiveStepIcon() {
        if (!isActive) return;
        return <Icon className="w-4 h-4 lg:w-5 lg:h-5" iconName="check-circle-solid" />;
    }

    function renderStepNumber() {
        const { stepNumber } = props;
        if (isActive || (!stepNumber && stepNumber !== 0)) return;
        return <Text>{stepNumber}.</Text>;
    }

    function renderText() {
        const { text, textProps = {} } = props;

        const _props = mergeProps<[TextProps, Partial<TextProps>]>({
            className: getTextClassname()
        }, textProps);

        return <Text {...textProps}>{text}</Text>;
    }

    function renderContent() {
        const { text } = props;
        return (
            <div className="flex shrink-0 space-x-2 items-center
                after:content-['/'] lg:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                {renderActiveStepIcon()}
                {renderStepNumber()}
                {renderText()}
            </div>
        );
    }

    return (
        <li className={getBaseClassname()}>
            {renderContent()}
        </li>
    );
};

export default Step;
