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
    const [selectedTokens, setSelectedTokens] = useState<TokenInfo[]>([]);
    const [isViewSelected, setIsViewSelected] = useState(false);

    function getBaseClassname() {
        return twMerge('');
    }

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(() => event.target.value);
        filterTokens(event.target.value);
    }, []);

    const onViewSelectedClick = useCallback(() => {
        setIsViewSelected(!isViewSelected);
    }, [isViewSelected]);

    function onTokenClick(token: TokenInfo) {
        const { address } = token;
        const index = selectedTokens.findIndex(_token => _token.address === address);

        if (index === -1)
            return setSelectedTokens([...selectedTokens, token]);


        // remove element if already exists
        const newArray = [...selectedTokens];
        newArray.splice(index, 1);
        return setSelectedTokens(newArray);
    }

    function filterTokens(query: string) {
        if (!query) return setFilteredTokens(TOKENS);

        const filteredTokens = TOKENS.filter(token => token.name.toLowerCase().includes(query.toLowerCase()) || token.symbol.toLowerCase().includes(query.toLowerCase()));
        setFilteredTokens(filteredTokens);
    }

    function isSelected(tokenAddress: string) {
        return selectedTokens.some(token => token.address === tokenAddress);
    }

    function renderSelectedIcon() {
        return (
            <Icon className="h-6 w-6 text-green-600 dark:text-green-400" iconName="check" />
        );
    }

    function renderDeleteIcon() {
        return (
            <Icon className="h-6 w-6 text-red-600 dark:text-red-400" iconName="x-mark" />
        );
    }

    function renderActionIcon(tokenAddress: string) {
        const _isSelected = isSelected(tokenAddress);

        return (
            <div className={twMerge('inline-flex items-center text-base font-semibold text-gray-900 dark:text-white')}>
                {_isSelected && isViewSelected && renderDeleteIcon()}
                {_isSelected && !isViewSelected && renderSelectedIcon()}
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
                onClick={() => onTokenClick(token)}>

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
                    {renderActionIcon(address)}
                </div>
            </li>
        );
    }

    function renderTokens() {
        if (isViewSelected) return selectedTokens.map(renderToken);

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

    function renderViewSelectedEmptyState() {
        if (!isViewSelected) return;
        if (selectedTokens.length > 0) return;

        return (
            <div className="text-center py-12">
                <Icon className="h-20 w-20 mx-auto" iconName="exclamation-triangle" />
                <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">No Tokens Selected</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Select one or more tokens from the list to view them here</p>
                <div className="text-sm hover:underline font-medium cursor-pointer" onClick={onViewSelectedClick}>View all tokens</div>
            </div>
        );
    }

    function renderToggleViewSelected() {
        let text = 'View selected tokens';
        if (isViewSelected)
            text = 'View all tokens';

        return <div className="text-sm hover:underline font-medium cursor-pointer" onClick={onViewSelectedClick}>{text}</div>;
    }

    function renderContent() {
        return (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Choose Tokens</h5>
                    <div className="flex text-blue-600 dark:text-blue-500">
                        {renderToggleViewSelected()}
                        <div className="bg-blue-100 text-xs font-medium ml-2 h-5 w-5
                                        flex items-center justify-center rounded-full dark:bg-gray-900 border border-blue-500">
                            {selectedTokens.length}
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
            {renderViewSelectedEmptyState()}
        </Card>
    );
};

export default SelectTokenCard;
