import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FooterProps {
    className?: string;
}

const Footer: FC<PropsWithChildren<FooterProps>> = props => {
    const { children, className = '' } = props;

    function getBaseClassname() {
        return twMerge('p-4 bg-white rounded-lg shadow lg:px-6 lg:py-8 dark:bg-gray-900', className);
    }


    return (
        <footer className={getBaseClassname()}>
            <div className="lg:flex lg:items-center lg:justify-between">
                <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
                    <div aria-hidden="true" className="flex space-x-1">
                        <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                        <div className="h-6 w-2 bg-primary"></div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">TurnHat</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 lg:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline lg:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline lg:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline lg:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 lg:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 lg:text-center dark:text-gray-400">© 3 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
        </footer>

    );
};

export default Footer;
