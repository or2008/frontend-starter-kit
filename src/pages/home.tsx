import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';

import PopoverDemo from '@/components/mollecules/PopoverDemo/PopoverDemo';
import useTheme from '@/hooks/use-theme';
import Header from '@/components/mollecules/Header/Header';
import SelectTokenCard from '@/components/mollecules/SelectTokenCard/SelectTokenCard';
import Footer from '@/components/mollecules/Footer/Footer';
import ToggleSwitch from '@/components/atoms/ToggleSwitch/ToggleSwitch';
import Stepper from '@/components/atoms/Stepper/Stepper';
import { randomIntFromInterval } from '@/utils/number';
import CreateWallet from '@/components/mollecules/CreateWallet/CreateWallet';
import Card from '@/components/atoms/Card/Card';
import Tooltip from '@/components/atoms/Tooltip/Tooltip';
import Text from '@/components/atoms/Text/Text';
import TooltipContainer from '@/components/atoms/Tooltip/TooltipContainer';

interface HomePageProps {
    className?: string;
}

const STEPS = ['Personal Info', 'Account', 'Confirmation'];

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

            <TooltipContainer className="">
                <Text>Hover me</Text>
                <Tooltip><Text>lalalalalala lalal allal ala lala</Text></Tooltip>
            </TooltipContainer>

            <div className="relative">
                <Tooltip><Text>SHOULD be SHOWN</Text></Tooltip>
            </div>
            <Stepper className="my-8" currentStepIndex={randomIntFromInterval(0, 2)} steps={STEPS} />

            <Card>
                <CreateWallet />
            </Card>
            <br/>
            <SelectTokenCard />
            <br/>


            <div className="text-center cursor-pointer">
                <div>Dark Mode?</div>
                <ToggleSwitch isOn={theme === 'dark'} onChange={toggleTheme} />
            </div>

            <br />

            <Footer />
        </div>
    );
};

export default Home;
