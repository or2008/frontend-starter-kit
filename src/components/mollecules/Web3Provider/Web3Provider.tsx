import { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { useProvider, useSigner } from 'wagmi';

const Web3Provider: FC<PropsWithChildren> = props => {
    const { } = props;

    const provider = useProvider();
    const { data: signer, isError, isLoading } = useSigner();

    useEffect(() => {
        // TODO SAVE TO STATE MANAGMENT HERE
    }, [signer]);

    return null;
};

export default Web3Provider;
