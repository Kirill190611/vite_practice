import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<Deck>('v1/decks', params)
  },
}

//types

export type AddDeckParams = {
  name: string,
}

export type FetchDecksResponse = {
  items: Deck[]
  pagination: PaginationType
}

export type Deck = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type AuthorType = {
  id: string
  name: string
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
