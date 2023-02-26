import Card from '@/components/atoms/Card/Card';
import { ChangeEvent, FC, PropsWithChildren, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import uniswapDefaultTokenList from '@uniswap/default-token-list';
import { schema, TokenInfo } from '@uniswap/token-lists';
import Input, { InputProps } from '@/components/atoms/Input/Input';
import Icon from '@/components/atoms/Icon/Icon';
import InputWithIcon, { InputWithIconProps } from '@/components/atoms/Input/InputWithIcon';

const TOKENS: TokenInfo[] = uniswapDefaultTokenList.tokens.filter(token => token.chainId === 1); // only ethereum tokens

export interface SelectTokenCardProps {
    className?: string;
}

const SelectTokenCard: FC<PropsWithChildren<SelectTokenCardProps>> = props => {
    const { children, className = '' } = props;

    const [searchValue, setSearchValue] = useState('');
    const [filteredTokens, setFilteredTokens] = useState(TOKENS);
    const [selectedTokenAddresses, setSelectedTokenAddresses] = useState(new Set<string>());

    function getBaseClassname() {
        return twMerge('flex');
    }

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(() => event.target.value);
        filterTokens(event.target.value);
    }, []);

    function onTokenClick(tokenAddress: string) {
        if (selectedTokenAddresses.has(tokenAddress))
            selectedTokenAddresses.delete(tokenAddress);
        else
            selectedTokenAddresses.add(tokenAddress);

        setSelectedTokenAddresses(new Set(selectedTokenAddresses));
    }

    function filterTokens(query: string) {
        if (!query) return setFilteredTokens(TOKENS);

        const filteredTokens = TOKENS.filter(token => token.name.toLowerCase().includes(query.toLowerCase()) || token.symbol.toLowerCase().includes(query.toLowerCase()));
        setFilteredTokens(filteredTokens);
    }

    function isSelected(tokenAddress: string) {
        return selectedTokenAddresses.has(tokenAddress);
    }

    function renderSelectedIcon(tokenAddress: string) {
        return (
            <div className={twMerge('inline-flex items-center text-base font-semibold text-gray-900 dark:text-white')}>
                <Icon className="h-4 w-4 text-green-600 dark:text-green-400" iconName="check" />
            </div>
        );
    }

    function renderToken(token: TokenInfo) {
        const { address, symbol, name, logoURI } = token;
        const _isSelected = isSelected(address);

        return (
            <li
                className={twMerge('transition py-3 lg:py-4 cursor-pointer', _isSelected && '')}
                key={address}
                onClick={() => onTokenClick(address)}>

                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img alt={name} className="w-8 h-8 rounded-full" src={logoURI} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {symbol}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {name}
                        </p>
                    </div>
                    {_isSelected && renderSelectedIcon(address)}
                </div>
            </li>
        );
    }

    function renderTokens() {
        return filteredTokens.map(renderToken);
    }

    function renderSearchInput() {
        const inputProps: InputProps = {
            placeholder: 'Type token name or symbol',
            value: searchValue,
            onChange,
            className: 'mt-4 mb-2'
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
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Select a token</h5>
                    <div className="flex text-blue-600 dark:text-blue-500">
                        <div className="text-sm hover:underline font-medium cursor-pointer">View selected</div>
                        <div className="bg-blue-100 text-xs font-medium ml-2 h-5 w-5
                                        flex items-center justify-center rounded-full dark:bg-gray-900 border border-blue-500">
                            {selectedTokenAddresses.size}
                        </div>
                    </div>
                </div>

                {renderSearchInput()}
                <ul className="divide-y overflow-auto max-h-80 divide-gray-200 dark:divide-gray-700">
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
