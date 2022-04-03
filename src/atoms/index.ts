import { atom } from 'recoil'
import type { Response } from '../api/types'

type pages = 'favorites' | 'search'

export const currentPageState = atom({
  key: 'currentPageState',
  default: 'search' as pages
})

export const querySearchOffset = atom({
  key: 'querySearchOffset',
  default: 0
})

export const initialSearchData = {
  data: [],
  pagination: {
    count: 0,
    offset: 0,
    total_count: 0
  }
} as Response

export const currentSearchResults = atom({
  key: 'currentSearchResults',
  default: initialSearchData
})

export const currentSearchText = atom({
  key: 'currentSearchText',
  default: ''
})
