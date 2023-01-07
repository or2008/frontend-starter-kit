import { type StateCreator } from 'zustand';

import { type StoreModel } from '../store';

export type Theme = 'dark' | 'light';;

export interface AppearanceSlice {
    theme: Theme
    setTheme: (theme: Theme) => void
}
const createAppearanceSlice: StateCreator<StoreModel, [], [], AppearanceSlice> = set => ({
    theme: 'dark',
    setTheme: theme => { set(state => ({ theme })); }
});

export { createAppearanceSlice };