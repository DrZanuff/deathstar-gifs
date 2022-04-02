import { atom } from 'recoil'

type pages = 'favorites' | 'search'

export const currentPageState = atom({
  key: 'currentPageState',
  default: 'search' as pages
})
