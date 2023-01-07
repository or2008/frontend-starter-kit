import { type FC } from 'react';

const NotFound: FC = () => (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center">
        <h1>404 | Not Found</h1>
        <p className="mt-4 mb-2.5">It looks like you were lost.</p>
        <div>Go home</div>
    </div>
);

export default NotFound;
