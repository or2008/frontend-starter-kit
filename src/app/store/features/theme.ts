import { Theme } from '@my-app'
import { atomWithStorage } from 'jotai/utils'

const themeAtom = atomWithStorage<Theme>('APP_THEME', 'dark')

export default themeAtom
