import Alert from '@/components/atoms/Alert/Alert';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon/Icon';
import { ethers } from 'ethers';
import { FC, Fragment, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAccount, useProvider } from 'wagmi';
import Text from '../../atoms/Text/Text';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';

export interface CreateWalletProps {
    className?: string;
}

type CreateWalletStep = 'welcome' | 'seed';

const CreateWallet: FC<PropsWithChildren<CreateWalletProps>> = props => {
    const { children, className = '' } = props;

    const [seed, setSeed] = useState(['']);
    const [step, setStep] = useState<CreateWalletStep>('welcome');


    function getBaseClassname() {
        return twMerge('');
    }

    function renderCopySeed() {
        return <div />;
    }

    const onShowSeedClick = useCallback(() => {
        setStep('seed');
    }, []);

    const onDoneClick = useCallback(() => {
        setStep('seed');
    }, []);

    useEffect(() => {
        const { mnemonic } = ethers.Wallet.createRandom();
        setSeed(mnemonic.phrase.split(' '));
    }, []);

    function renderSecureViewAlertBot() {
        return `Make sure no one else is watching your screen when you back up the seed phrase`;
    }

    function renderDisclaimerPoint(point: string, index: number) {
        return <li key={index}>{point}</li>;
    }

    function renderDisclaimer() {
        const points = [
            'If I lose my seed phrase, my assets will be lost forever.',
            'If I share my seed phrase with others, my assets will be stolen.',
            'The seed phrase is only stored on my computer, and Turnhat has no access to it.',
            'If I uninstall Turnhat without backing up the seed phrase, Turnhat cannot retrieve it for me.'
        ];

        return (
            <div className="flex p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-900 dark:text-blue-400" role="alert">
                <Icon className="flex-shrink-0 inline w-5 h-5 mr-3" iconName="info" />
                <div className="">
                    <span className="font-medium">Before starting, please read and keep the following security points in mind:</span>
                    <ul className="mt-3 list-disc list-inside space-y-1">
                        {points.map(renderDisclaimerPoint)}
                    </ul>
                </div>
            </div>
        );
    }

    function renderSeedGridItem(key: string, index: number) {
        return (
            <div className="border relative text-center bg-gray-50 border-gray-200 px-2 py-4 dark:bg-gray-900 dark:border-gray-700" key={key}>
                <Text className="text-xs absolute left-2 top-2">{index + 1}.</Text>
                {key}
            </div>
        );
    }

    function renderSeedGrid() {
        return (
            <div className="grid grid-cols-3 lg:grid-cols-4">
                {seed.map(renderSeedGridItem)}
            </div>
        );
    }

    function renderSeedStep() {
        if (step !== 'seed') return;

        return (
            <div className="space-y-4">
                <Alert showIcon type="danger">
                    <Text>Make sure no one else is watching your screen when you back up the seed phrase</Text>
                </Alert>
                {renderSeedGrid()}
                <div className="flex space-x-4 justify-center">
                    <CopyToClipboard className="hover:underline text-sm" textToCopy={seed.join(' ')}>Copy seed to clipboard</CopyToClipboard>
                    <Button onClick={onDoneClick} text="I've saved the phrase" />
                </div>
            </div>
        );
    }

    function renderWelcomeStep() {
        if (step !== 'welcome') return;
        return (
            <div className="space-y-4">
                {renderDisclaimer()}
                <Button className="block mx-auto" onClick={onShowSeedClick} text="Show seed phrase" />
            </div>
        );
    }

    return (
        <div className={getBaseClassname()}>
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Create Backup wallet</h5>
            <div className="mt-4">
                {renderWelcomeStep()}
                {renderSeedStep()}
            </div>
        </div>
    );
};

export default CreateWallet;
