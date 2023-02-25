import { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { useProvider, useSigner } from 'wagmi';

const Web3Provider: FC<PropsWithChildren> = props => {
    const { } = props;

    const provider = useProvider();
    const { data: signer, isError, isLoading } = useSigner();

    console.log({ isLoading, isError, signer });

    useEffect(() => {
        // TODO SAVE TO STATE MANAGMENT HERE
        console.log('useEffect', signer);
    }, [signer]);

    return <></>;
};

export default Web3Provider;
