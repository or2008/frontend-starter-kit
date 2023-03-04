import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeaderProps {
    className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = props => {
    const { children, className = '' } = props;

    function getBaseClassname() {
        return twMerge('flex');
    }

    function renderContent() {
        return (
            <nav className="z-10 w-full">
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 lg:py-4 lg:gap-0 relative">
                    <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
                    <div className="relative z-20 w-full flex justify-between lg:w-max lg:px-0">
                        <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
                            <div aria-hidden="true" className="flex space-x-1">
                                <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                                <div className="h-6 w-2 bg-primary"></div>
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">TurnHat</span>
                        </a>

                        <div className="relative flex items-center lg:hidden max-h-10">
                            <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative p-6 space-y-1">
                                <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-sky-500 dark:bg-gray-300 transition"></div>
                                <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-sky-500 dark:bg-gray-300 transition"></div>
                                <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-sky-500 dark:bg-gray-300 transition"></div>
                            </label>
                        </div>
                    </div>
                    <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
                    <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all  scale-95 origin-top
                                lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                                peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none
                                dark:shadow-none dark:border-gray-700">

                        <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                            <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                                <li>
                                    <a href="#blog" className="block lg:px-4 transition hover:text-primary">
                                        <span>Blog</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <ConnectButton />
                        {/* <div className="transition cursor-pointer hover:bg-sky-400 flex bg-sky-500 h-8 px-4 items-center rounded-2xl text-sm">
                            Connect wallet
                        </div> */}
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <header className={getBaseClassname()}>
            {renderContent()}
        </header>
    );
}

export default Header;
