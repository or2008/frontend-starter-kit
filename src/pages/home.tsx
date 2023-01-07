import { HiMoon, HiSun } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';
import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';

import react_icon from '@/assets/react.svg';
import { useTheme } from '@/hooks';
import { ReactImage } from '@/components/atoms/react-image/react-image';
import PopoverDemo from '@/components/mollecules/PopoverDemo/PopoverDemo';


interface HomePageProps {
    className?: string;
}

const Home: FC<HomePageProps> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <section className={twMerge('inline-flex flex-col items-center justify-center gap-4', className)}>
            <ReactImage className="w-16 h-16 react animate-spin" src={react_icon} />
            <h1 className="bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-primary-5 to-secondary-5">Stravital</h1>
            <p className="text-center">Kickstart your Web Application with React, Vite and Tailwind CSS.</p>

            <div className="cursor-pointer flex items-center justify-center gap-2">
                {/* <Button className='p-0 h-8 w-8' onClick={toggleTheme}>
                    {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </Button>
                */}

                <IoLogoGithub />
                <PopoverDemo />
                <div className="" onClick={toggleTheme}>
                    {theme === 'dark' ? <HiSun size="20px" /> : <HiMoon size="20px" />}
                </div>

            </div>

            {/* <UnderlineLink to='/foo'>See 404</UnderlineLink> */}
        </section>
    );
};

export default Home;
