import { mergeProps } from '@/utils/merge-props';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon, { IconProps } from '../Icon/Icon';
import Text, { TextProps } from '../Text/Text';

export interface EmptyStateProps {
    className?: string;
    iconProps?: Partial<IconProps>;
    title?: string;
    titleProps?: TextProps;
    message?: string;
    messageProps?: TextProps;
}

const EmptyState: FC<PropsWithChildren<EmptyStateProps>> = props => {
    const { children, className = '' } = props;

    function getBaseClassname() {
        return twMerge('');
    }

    function renderIcon() {
        const { iconProps } = props;
        if (!iconProps) return;

        const _props = mergeProps<[IconProps, Partial<IconProps>]>({
            className: 'h-16 w-16 mx-auto',
            iconName: 'exclamation-triangle'
        }, iconProps);

        return <Icon {..._props} />;
    }

    function renderTitle() {
        const { title = '', titleProps = {} } = props;
        if (!title) return;

        const _props = mergeProps<[TextProps, Partial<TextProps>]>({
            isTruncate: true,
            className: 'block mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'
        }, titleProps);

        return <Text {..._props}>{title}</Text>;
    }

    function renderMessage() {
        const { message = '', messageProps = {} } = props;
        if (!message) return;

        const _props = mergeProps<[TextProps, Partial<TextProps>]>({
            isTruncate: false,
            className: 'font-normal block text-gray-500 dark:text-gray-400'
        }, messageProps);

        return <Text {..._props}>{message}</Text>;
    }

    function renderContent() {
        return (
            <div className="text-center py-8 lg:py-12">
                {renderIcon()}
                {renderTitle()}
                {renderMessage()}
                {children}
            </div>
        );
    }

    return (
        <div className={getBaseClassname()}>
            {renderContent()}
        </div>
    );
};

export default EmptyState;
