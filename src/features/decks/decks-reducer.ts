import {Deck} from "./decks-api.ts";

const initialState = {
    decks: [] as Deck[],
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case "DECKS/SET-DECKS": {
            return {
                ...state,
                decks: action.decks,
            }
        }
        case "DECKS/POST-DECKS": {
            return {
                ...state,
                decks: [
                   action.deck, ...state.decks
                ]
            }
        }
        default:
            return state
    }
}

export const setDecksAC = (decks: Deck[]) => ({
    type: "DECKS/SET-DECKS",
    decks,
} as const)

export const addDecksAC = (deck: Deck) => ({
    type: "DECKS/POST-DECKS",
    deck
} as const)

type DecksActions = ReturnType<typeof setDecksAC>
    | ReturnType<typeof addDecksAC>
