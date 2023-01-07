import { Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const LayoutMain = () => (
    <main className={twMerge('layout')}>
        <Outlet />
    </main>
);

export default LayoutMain;

