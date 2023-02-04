import { HiMoon, HiSun } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';
import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';

import react_icon from '@/assets/react.svg';
import { ReactImage } from '@/components/atoms/react-image/react-image';
import PopoverDemo from '@/components/mollecules/PopoverDemo/PopoverDemo';
import useTheme from '@/hooks/use-theme';
import Header from '@/components/mollecules/Header/Header';

interface HomePageProps {
    className?: string;
}

const Home: FC<HomePageProps> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="container mx-auto">
            <Header />
            <section className="mt-4">
                <ReactImage className="w-16 h-16 mx-auto react animate-spin" src={react_icon} />
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
        </div>
    );
};

export default Home;
