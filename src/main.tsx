import '@/styles/tailwind.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
    darkTheme,
    getDefaultWallets,
    lightTheme,
    midnightTheme,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, useSigner, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app';
import Web3Provider from './components/mollecules/Web3Provider/Web3Provider';

const element = document.querySelector('#app');
if (!element) throw new Error('App.tsx - coundn\'t find element with id #app');

const root = createRoot(element);

const { chains, provider } = configureChains(
    [mainnet],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'TurnHat',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});

root.render(
    <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}>
                <App />
                <Web3Provider />
            </RainbowKitProvider>
        </WagmiConfig>
    </BrowserRouter>
);
