import { useEffect, useState } from 'react';

type ImageExistsStatus = 'exists' | 'non-exists' | 'pending';

export interface UseImageExists {
    imageExistsStatus: ImageExistsStatus;
}

async function checkIfImageExists(source: string): Promise<boolean> {
    return await new Promise(resolve => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(true);
        });

        img.addEventListener('error', () => {
            resolve(false);
        });

        img.src = source;
    });
}

export default function useImageExists(source: string): UseImageExists {
    const [imageExistsStatus, setImageExistsStatus] = useState<ImageExistsStatus>('pending');

    // https://github.com/facebook/react/issues/14920
    useEffect(() => {
        async function onSourceReady() {
            const isExists = await checkIfImageExists(source);
            setImageExistsStatus(isExists ? 'exists' : 'non-exists');
        }
        onSourceReady();
    }, [source]);

    return { imageExistsStatus };
};

