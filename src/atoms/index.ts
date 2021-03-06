import { atom } from 'recoil'
import type { Response, Gif } from '../api/types'

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

export const modalIsOpenState = atom({
  key: 'modalIsOpenState',
  default: false
})

export const initiaGif = {
  id: '',
  title: '',
  username: '',
  url: '',
  bitly_gif_url: '',
  bitly_url: '',
  slug: '',
  description: '',
  images: {
    original: {
      height: '200',
      width: '200',
      url: '',
      webp: ''
    },
    fixed_width: {
      height: '200',
      width: '200',
      url: '',
      webp: ''
    }
  }
} as Gif

export const currentGif = atom({
  key: 'currentGif',
  default: initiaGif
})

export const currentEditTitle = atom({
  key: 'currentTitle',
  default: ''
})

export const currentEditDescription = atom({
  key: 'currentEditDescription',
  default: ''
})

type EditModes = 'edit' | 'save'

export const modalEditMode = atom({
  key: 'modalEditMode',
  default: 'save' as EditModes
})

export const favoritesState = atom({
  key: 'favoritesState',
  default: {} as Record<string, Gif>
})
