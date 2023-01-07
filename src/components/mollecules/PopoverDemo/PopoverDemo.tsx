import { Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-popover';
import { type FC } from 'react';

interface PopoverDemoProps {
    className?: string;
}

const PopoverDemo: FC<PopoverDemoProps> = () => (
    <Root>
        <Trigger>More info</Trigger>
        <Portal>
            <Content>
            Some more info…
                <Arrow />
            </Content>
        </Portal>
    </Root>
);

export default PopoverDemo;

