import { type FC } from 'react';

import UnderlineLink from '@/components/mollecules/UnderlineLink';

const NotFound: FC = () => (
    <div className='flex flex-col items-center justify-center w-full h-screen text-center'>
        <h1>404 | Not Found</h1>
        <p className='mt-4 mb-2.5'>It looks like you were lost.</p>
        <UnderlineLink to='/'>Go home</UnderlineLink>
    </div>
);

export default NotFound;
