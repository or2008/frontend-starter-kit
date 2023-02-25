import Card from '@/components/atoms/Card/Card';
import { ChangeEvent, FC, PropsWithChildren, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import uniswapDefaultTokenList from '@uniswap/default-token-list';
import { schema, TokenInfo } from '@uniswap/token-lists'
import Input, { InputProps } from '@/components/atoms/Input/Input';
import Icon from '@/components/atoms/Icon/Icon';
import InputWithIcon, { InputWithIconProps } from '@/components/atoms/Input/InputWithIcon';

const TOKENS: TokenInfo[] = uniswapDefaultTokenList.tokens.filter((token) => token.chainId === 1); // only ethereum tokens

export interface SelectTokenCardProps {
    className?: string;
}

const SelectTokenCard: FC<PropsWithChildren<SelectTokenCardProps>> = props => {
    const { children, className = '' } = props;

    const [value, setValue] = useState('');
    const [filteredTokens, setFilteredTokens] = useState(TOKENS);

    function getBaseClassname() {
        return twMerge('flex');
    }

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(() => event.target.value);
        filterTokens(event.target.value);
    }, [value]);

    function filterTokens(query: string) {
        if (!query) return setFilteredTokens(TOKENS);

        const filteredTokens = TOKENS.filter((token) => token.name.toLowerCase().includes(query.toLowerCase()) || token.symbol.toLowerCase().includes(query.toLowerCase()));
        setFilteredTokens(filteredTokens);
    }

    function renderToken(token: TokenInfo) {
        const { address, symbol, name, logoURI } = token;
        return (
            <li key={address} className="py-3 lg:py-4 cursor-pointer">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={logoURI} alt={name} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {symbol}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {name}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
        );
    }

    function renderTokens() {
        return filteredTokens.map(renderToken)
    }

    function renderSearchInput() {
        const inputProps: InputProps = {
            placeholder: 'Type token name or symbol',
            value,
            onChange,
            className: "mt-4 mb-2"
        };

        const props: InputWithIconProps = {
            inputProps,
            iconProps: {
                className: 'w-4 h-4',
                iconName: 'search'
            }
        };

        return <InputWithIcon {...props} />;
    }

    function renderContent() {
        return (
            <div className="w-full">
                <div className="flexitems-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Select a token</h5>
                </div>

                {renderSearchInput()}
                <ul role="list" className="divide-y overflow-auto max-h-80 divide-gray-200 dark:divide-gray-700">
                    {renderTokens()}
                </ul>
            </div>
        );
    }

    return (
        <Card className={getBaseClassname()}>
            {renderContent()}
        </Card>
    );
};

export default SelectTokenCard;
