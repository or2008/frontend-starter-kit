import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { ReactImage } from '@/components/atoms/react-image/react-image';
import PopoverDemo from '@/components/mollecules/PopoverDemo/PopoverDemo';
import useTheme from '@/hooks/use-theme';
import Header from '@/components/mollecules/Header/Header';
import SelectTokenCard from '@/components/mollecules/SelectTokenCard/SelectTokenCard';
import Footer from '@/components/mollecules/Footer/Footer';
import Icon from '@/components/atoms/Icon/Icon';
import ToggleSwitch from '@/components/atoms/ToggleSwitch/ToggleSwitch';

interface HomePageProps {
    className?: string;
}

const Home: FC<HomePageProps> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="container mx-auto">
            <Header />
            <section className="mt-4">
                {/* <ReactImage className="w-16 h-16 mx-auto react animate-spin" src={react_icon} /> */}
                <h1 className="bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-primary-5 to-secondary-5">Stravital</h1>
                <p className="text-center">Kickstart your Web Application with React, Vite and Tailwind CSS.</p>




                <div className="cursor-pointer flex items-center justify-center gap-2">
                    <PopoverDemo />
                </div>

                {/* <UnderlineLink to='/foo'>See 404</UnderlineLink> */}
            </section>


            <SelectTokenCard />

            <div className="text-center cursor-pointer">
                <div>Dark Mode?</div>
                <ToggleSwitch isOn={theme === 'dark'} onChange={toggleTheme} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
