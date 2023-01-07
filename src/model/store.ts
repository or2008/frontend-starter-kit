import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createAppearanceSlice, type AppearanceSlice } from './appearance/appearance';

export type StoreModel = AppearanceSlice;

const useStore = create<StoreModel>()(
    persist(
        devtools(
            (...args) => ({
                ...createAppearanceSlice(...args)
            })
        ),
        { name: 'store' }
    )
);

export { useStore };